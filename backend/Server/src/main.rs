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
#[derive(Serialize, Deserialize)]
struct PDFdoc {
    id: String,
    title: String,
    date: i64,
    content: String,
    link: String,
    is_normative: i32,
}
/// Wraper for the server response
#[derive(Serialize)]
struct SearchResponse {
    results: Vec<PDFdoc>,
}

/// Performs a Meilisearch query based on the provided query string and the Meilisearch client.
/// Returns Meilisearch search results, or an internal server error if the query fails.
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

/// This function serializes the search results since it does not implement the Serialize and
/// Deserialize traits. It receives a SearchResults Struct and returns a JSON formatted string with
/// the vector of results.
fn serialize_search_results(search_results: &meilisearch_sdk::search::SearchResults<PDFdoc>) -> String {
    let entries: Vec<PDFdoc> = search_results
        .hits
        .par_iter()
        .map(|hit| PDFdoc {
            id: hit.result.id.clone(),
            title: hit.result.title.clone(),
            date: hit.result.date,
            content: hit.result.content.clone(),
            link: hit.result.link.clone(),
            is_normative: hit.result.is_normative,
        })
        .collect();

    let search_response = SearchResponse { results: entries };

    serde_json::to_string(&search_response).expect("Could not serialize search results.")
}

/// The main search function. Listens for JSON requests with a search query and returns a JSON
/// response.
async fn search(query: web::Query<SearchQueryWrapper>, client: web::Data<Client>) -> Result<HttpResponse, Error> {
    println!("Received search request with query: {query:#?}");

    // Trim the query to the first 200 characters
    let trimmed_query = if query.q.len() > 200 { &query.q[..200] } else { &query.q };

    if trimmed_query.len() < 3 {
        // You can adjust the minimum query length
        return Ok(HttpResponse::Ok().json(SearchResponse { results: vec![] }));
    }

    // Query Meilisearch
    let search_results = query_meilisearch(trimmed_query, &client).await?;

    // Serialize the results to JSON
    let search_results_json = serialize_search_results(&search_results);

    Ok(HttpResponse::Ok()
        .content_type("application/json")
        .body(search_results_json))
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

#[cfg(test)]
mod tests {
    use super::*;
    use std::env;

    #[actix_rt::test]
    async fn test_query_meilisearch() {
        // Get the API key from the environment, just like in your main function.
        let api_key = env::var("MEILISEARCH_API_KEY").expect("missing MEILISEARCH_API_KEY environment variable.");

        // Create a Meilisearch client.
        let client = Client::new("http://localhost:7700", Some(api_key));

        // Test a variety of queries.
        let queries = vec!["trancamento", "ProgreÇãO dE carREirA", "troca", "perspicaz"];

        for query in queries {
            let result = query_meilisearch(query, &client).await;

            // Assert that the result is Ok.
            assert!(result.is_ok());

            // If you want to check is_normative, you can iterate through the documents and assert the
            // constraints.
            if let Ok(search_results) = result {
                for doc in &search_results.hits {
                    assert!((1..=3).contains(&doc.result.is_normative));
                }
            }
        }
    }
}
