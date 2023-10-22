use scraper::{Html, Selector};
use std::fs;

/// Main function to process HTML files in the current directory and extract links
/// that start with "https://sig.unb.br/sigrh/downloadArquivo?idArquivo=".
///
/// This function performs the following steps:
///
/// 1. Retrieves the current directory.
/// 2. Reads the directory entries.
/// 3. Parses HTML files in the directory, looking for 'a' elements.
/// 4. Filters and prints links that match a specific criteria.
/// 
/// The program is supposed to be ran from the terminal and piped into a file or another program or script.
///
/// # Errors
///
/// This function may panic if it fails to perform any of the following operations:
///
/// - Getting the current directory.
/// - Reading directory entries.
/// - Parsing the HTML document.
/// - Reading a file's contents.
fn main() {
    // Get the current directory
    let current_dir = std::env::current_dir().expect("Failed to get current directory");

    // Read the directory entries
    let entries = fs::read_dir(current_dir).expect("Failed to read directory");

    // Define the selector for 'a' elements
    let selector = Selector::parse("a").expect("Could not parse document");

    entries.into_iter().for_each(|entry| {
        if let Ok(entry) = entry {
            let path = entry.path();

            // Check if the entry is a file and has a .html extension
            if path.is_file() && path.extension().map_or(false, |ext| ext == "html") {
                // Read the file contents
                let contents = fs::read(&path).expect("Failed to read file");

                // Convert the bytes to a string, replacing invalid UTF-8 sequences with the lossy replacement
                // character
                let contents_string = String::from_utf8_lossy(&contents);

                // Parse the HTML
                let html = Html::parse_document(&contents_string);

                // Iterate through 'a' elements and filter by the desired criteria
                html.select(&selector).for_each(|element| {
                    if let Some(href) = element.value().attr("href") {
                        if href.starts_with("https://sig.unb.br/sigrh/downloadArquivo?idArquivo=") {
                            println!("{}", href);
                        }
                    }
                });
            }
        }
    });
}
