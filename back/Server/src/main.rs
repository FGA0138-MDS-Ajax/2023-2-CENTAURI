use actix_files::{Files, NamedFile};
use actix_web::{web, App, Error, HttpResponse, HttpServer};
use meilisearch_sdk::client::Client;
use rayon::prelude::*;
use serde::{Deserialize, Serialize};
use std::path::PathBuf;

/// Wrapper for the search query.
#[derive(Deserialize, Debug)]
struct SearchQueryWrapper {
    q: String,
}

/// Represents the fields of each object in the database.
#[derive(Serialize, Deserialize, Debug)]
struct PDFdoc {
    id: String,
    title: String,
    date: i64,
    content: String,
    link: String,
}

/// Wrapper for the search results.
#[derive(Serialize, Debug)]
struct SearchResults {
    results: Vec<PDFdoc>,
}

/// Performs a Meilisearch query based on the provided query string and the Meilisearch client.
/// Returns Meilisearch search results or an internal server error if the query fails.
async fn query_meilisearch(
    query: &str,
    client: &Client,
) -> Result<meilisearch_sdk::search::SearchResults<PDFdoc>, Error> {
    let search_results = client
        .index("entries")
        .search()
        .with_query(query)
        .execute()
        .await
        .map_err(|e| {
            eprintln!("Meilisearch Error: {e:?}");
            actix_web::error::ErrorInternalServerError("Meilisearch query failed")
        })?;

    Ok(search_results)
}

/// Transforms Meilisearch search results into a custom format suitable for the response.
fn transform_results(search_results: &meilisearch_sdk::search::SearchResults<PDFdoc>) -> SearchResults {
    let entries: Vec<PDFdoc> = search_results
        .hits
        .par_iter()
        .map(|hit| PDFdoc {
            id: hit.result.id.clone(),
            title: hit.result.title.clone(),
            date: hit.result.date,
            content: hit.result.content.clone(),
            link: hit.result.link.clone(),
        })
        .collect();

    SearchResults { results: entries }
}

/// The main search function. Listens for JSON requests with a search query and returns a JSON
/// response.
async fn search(query: web::Query<SearchQueryWrapper>, client: web::Data<Client>) -> Result<HttpResponse, Error> {
    println!("Received search request with query: {query:#?}");

    // Trim the query to the first 200 characters
    let trimmed_query = if query.q.len() > 200 { &query.q[..200] } else { &query.q };

    if trimmed_query.len() < 3 {
        // You can adjust the minimum query length
        return Ok(HttpResponse::Ok().json(SearchResults { results: vec![] }));
    }

    // Query Meilisearch
    let search_results = query_meilisearch(trimmed_query, &client).await?;

    println!("Meilisearch search results: {search_results:#?}");

    // Transform results
    let search_results = transform_results(&search_results);

    println!("Returning search results as JSON: {search_results:#?}");

    Ok(HttpResponse::Ok().json(search_results))
}

/// Serves the main webpage.
fn index() -> Result<NamedFile, Error> {
    let path: PathBuf = PathBuf::from("static/index.html");
    println!("Serving index.html from path: {path:?}");
    Ok(NamedFile::open(path)?)
}

/// The entry point of the program. Sets up the Actix-web server, connects to the Meilisearch
/// server, and starts the server.
#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let api_key = std::env::var("MEILISEARCH_API_KEY").expect("missing MEILISEARCH_API_KEY environment variable.");

    //Uses the SDK to connect to the Meilisearch server. For the prototype I hardcoded the API key
    let meilisearch_client = Client::new("http://localhost:7700", Some(api_key));

    let meilisearch_client_data = web::Data::new(meilisearch_client.clone());

    let server = HttpServer::new(move || {
        App::new()
            .app_data(meilisearch_client_data.clone()) // Share the client across requests
            .service(web::resource("/search").to(search))
            .service(Files::new("/static", "static").show_files_listing())
            .route("/", web::get().to(|| async { index() }))
            .default_service(web::route().to(HttpResponse::NotFound))
    });

    let server = server.bind("127.0.0.1:8080")?;
    println!("Actix-web server started at http://127.0.0.1:8080");
    server.run().await
}
