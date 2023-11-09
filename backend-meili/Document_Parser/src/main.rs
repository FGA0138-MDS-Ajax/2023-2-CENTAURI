use chrono::Datelike;
use lazy_regex::regex;
use serde_derive::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::HashSet;
use std::error::Error;
use std::path::Path;
use std::process::Command;
use std::result::Result;
use std::{fs, io};

/// Represents each document entry, with macros to both read and write to a JSON file.
#[derive(Serialize, Deserialize)]
struct Entry {
    id: String,
    title: Option<String>,
    date: Option<i64>,
    content: String,
    link: String,
}

/// Represents an array of document entries, with macros to both read and write to a JSON file.
#[derive(Serialize, Deserialize)]
struct Data {
    entries: Vec<Entry>,
}

/// On program startup checks for the existence of in, old and out folders, for ingesting, moving to
/// and outputting results respectively.
fn create_folders_if_not_exist() -> Result<(), io::Error> {
    let folders: [&str; 3] = ["in", "out", "old"];

    for folder in &folders {
        let folder_path = Path::new(folder);
        if !folder_path.exists() {
            println!("The '{folder}' folder doesn't exist. Create it? (Y/n)");
            let mut input: String = String::new();
            io::stdin().read_line(&mut input)?;

            if input.trim().to_lowercase() == "y" {
                fs::create_dir(folder_path)?;
                println!("Created '{folder}' folder.");
            } else {
                println!("Folder '{folder}' does not exist. Exiting.");
                std::process::exit(1);
            }
        }
    }

    Ok(())
}
/// Receives a reference to a string with the formatted text and a reference to a vector with
/// keywords, optionally returning a string with the title. This function looks for the title in
/// each line and immediately returns upon finding it.
fn return_title(formatted_text: &str, keywords: &[&str]) -> Option<String> {
    let mut found_title: Option<String> = None;
    for line in formatted_text.lines() {
        if keywords.iter().any(|&keyword| line.contains(keyword)) {
            found_title = Some(line.to_string());
            break; // Stop searching once the title is found
        }
    }
    found_title
}

/// Receives a reference to a string with the formatted text, optionally returning a 64-bit integer
/// with the date as Unix Epoch. This function looks for the date in each line and immediately
/// returns upon finding it. First it searches for dates in the Brazilian format, and if it is not
/// found, it looks for numerical dates.
fn return_date(formatted_text: &str) -> Option<i64> {
    if let Some(date) = extract_portuguese_date(formatted_text) {
        return Some(date);
    }

    for line in formatted_text.lines() {
        if let Some(date) = extract_date(line) {
            return Some(date);
        }
    }

    None
}

/// Receives a string with the Extracted Text, a reference to a vector with Keywords and a reference
/// to a Hash-Set of Already Processed Titles, optionally returning a Title string and a 64-bit
/// integer with the Date as Unix Epoch. It is guaranteed to return a boolean that tells if a given
/// entry is a duplicate. Upon finding a duplicate, this function will print a warning on the
/// terminal output, and will return no date, no title and a True value for the is_duplicate
/// boolean.
#[allow(clippy::unnecessary_wraps)]
fn return_parameters(
    text: &str,
    keywords: &[&str],
    existing_titles: &HashSet<String>,
) -> Result<(Option<String>, Option<i64>, bool), pdf_extract::OutputError> {
    let found_title = return_title(text, keywords);
    let found_date = return_date(text);

    let mut result_title: Option<String> = found_title.clone();
    let mut result_date: Option<i64> = found_date;
    let mut is_duplicate: bool = false;

    if let Some(ref title) = found_title {
        if existing_titles.contains(title) {
            println!("Warning: Duplicate entry with title '{title}'");
            result_title = None;
            result_date = None;
            is_duplicate = true;
        }
    }

    Ok((result_title, result_date, is_duplicate))
}

/// This function takes a reference to a Line of text and returns a 64-bit integer with Date as Unix
/// Epoch. The regex engine looks for a case-insensitive match of a Portuguese Date format, i.e., “2
/// de Outubro de 2023”. If the date is formatted with only the last two digits of a year, the
/// function will decide in which century it is by fitting the date in the range of 1960 to 2059.
fn extract_portuguese_date(line: &str) -> Option<i64> {
    // Define month names in Portuguese (case-insensitive)
    let month_names = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];

    // Regular expression to match the Portuguese date format
    let re = regex!(r"(\d{1,2})\s*de\s*([^\d\s]+)\s*de\s*(\d{2,4})");

    if let Some(captures) = re.captures(line) {
        let day: u32 = captures.get(1)?.as_str().parse::<u32>().ok()?;
        let month_str = captures.get(2)?.as_str().to_lowercase();

        // Convert the Portuguese month name to a numeric month
        let month: Option<u32> = month_names
            .iter()
            .position(|&m| m.to_lowercase() == month_str)
            .and_then(|idx| idx.try_into().ok());

        if let Some(month) = month {
            // Hardcode the year as 1960
            let year: i32 = 1960;

            let date: chrono::NaiveDate = chrono::NaiveDate::from_ymd_opt(year, month, day)?;
            return Some(date.and_hms_opt(0, 0, 0)?.timestamp());
        }
    }

    None
}

/// This function is run if [extract_portuguese_date] returns nothing. It takes a reference to a
/// Line of text and returns a 64-bit integer with Date as Unix Epoch. The regex engine looks for
/// any slash separated date, ranging from 4 digits up to 8, i.e., from 2/9/23 to 02/09/2023.
fn extract_date(line: &str) -> Option<i64> {
    let re = regex!(r"(\d{1,2})/(\d{1,2})/(\d{2,4})");
    let captures = re.captures(line);

    if let Some(captures) = captures {
        let day: u32 = captures.get(1)?.as_str().parse::<u32>().ok()?;
        let month: u32 = captures.get(2)?.as_str().parse::<u32>().ok()?;
        let year_str = captures.get(3)?.as_str();

        // Determine the year format (2 or 4 digits)
        let year: i32 = if year_str.len() == 2 {
            let current_year = chrono::Local::now().year() % 100; // Get the current two-digit year
            let year: i32 = year_str.parse::<i32>().ok()?;
            if year <= current_year {
                // If the year is less than or equal to the current two-digit year, assume it's in the current
                // century
                2000 + year
            } else {
                // Otherwise, assume it's in the previous century
                1900 + year
            }
        } else {
            year_str.parse::<i32>().ok()?
        };

        let date: chrono::NaiveDate = chrono::NaiveDate::from_ymd_opt(year, month, day)?;
        return Some(date.and_hms_opt(0, 0, 0)?.timestamp());
    }

    None
}

/// This function takes a reference to the path of the file currently being evaluated and returns a
/// result, which may be either a string, or a pointer to a heap allocated region containing the
/// error. This is necessary because the error size cannot be known at compile time. Based on the
/// file stem (the part that is not the extension), which must be formatted in a very particular
/// way, this function generates a URL which can be used to download the PDF it is associated to.
fn get_link(path: &Path) -> Result<String, Box<dyn Error>> {
    Option::map(
        Option::and_then(path.file_stem(), |stem| stem.to_str()),
        |stem_str| -> Result<String, Box<dyn Error>> {
            let parts: Vec<&str> = stem_str.split('_').collect();
            if parts.len() == 2 {
                let id = parts[0];
                let key = parts[1];
                Ok(format!(
                    "https://sig.unb.br/sigrh/downloadArquivo?idArquivo={id}&key={key}"
                ))
            } else {
                Err(Box::from(format!("Invalid filename format or path: {path:?}")))
            }
        },
    )
    .unwrap_or_else(|| Err(Box::from(format!("Invalid filename format or path: {path:?}"))))
}

/// This function takes a reference to the path of the file currently being evaluated and returns a
/// result, which may be either a string, or a pointer to a heap allocated region containing the
/// error. This is necessary because the error size cannot be known at compile time. The function
/// calls Poppler's [pdftotext](https://manpages.debian.org/stretch/poppler-utils/pdftotext.1.en.html) with the path as
/// an argument, and suppresses the output to stderr.
fn extract_text(path: &Path) -> Result<String, Box<dyn Error>> {
    let output = Command::new("pdftotext")
        .arg("-q") // Suppress output to stderr
        .arg(path)
        .arg("-") // Extract to stdout
        .output()?;

    if output.status.success() {
        let text = String::from_utf8_lossy(&output.stdout);
        Ok(text.into_owned())
    } else {
        Err("pdftotext command failed".into())
    }
}

/// The main entry point of the program.
///
/// This function is responsible for processing PDF files in the 'in' folder, extracting relevant
/// information, and updating an entries JSON file in the 'out' folder. It performs the following
/// steps:
///
/// 1. Creates necessary folders ('in', 'out', 'old') if they do not exist.
/// 2. Loads existing entries from 'entries.json' in the 'out' folder if it exists.
/// 3. Iterates through PDF files in the 'in' folder.
/// 4. Extracts text content from each PDF file.
/// 5. Identifies and processes valid entries, including title, date, and link generation.
/// 6. Moves processed PDF files to the 'old' folder.
/// 7. Writes updated entry data to 'entries.json' in the 'out' folder.
///
/// # Errors
///
/// This function returns a `Result<(), Box<dyn Error>>` to handle potential errors during
/// execution. Any error encountered during folder creation, file I/O, or JSON serialization
/// will be wrapped in the `Err` variant.
fn main() -> Result<(), Box<dyn Error>> {
    create_folders_if_not_exist()?;
    let in_folder = Path::new("in");
    let out_folder = Path::new("out");
    let old_folder = Path::new("old");

    let mut existing_titles: HashSet<String> = HashSet::new();
    let mut entries: Vec<Entry> = Vec::new();

    // Load existing entries from entries.json if it exists
    let json_path = out_folder.join("entries.json");
    if json_path.exists() {
        let json_str: String = fs::read_to_string(&json_path)?;
        let existing_entries: Data = serde_json::from_str(&json_str)?;
        for entry in existing_entries.entries {
            if let Some(ref title) = entry.title {
                existing_titles.insert(title.clone());
            }
            entries.push(entry);
        }
    }

    for entry in fs::read_dir(in_folder)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_file() && path.extension().map_or(false, |ext| ext == "pdf") {
            let text = extract_text(&path)?;
            match return_parameters(
                &text,
                &["RESOLUÇÃO", "Cronograma", "Calendário", "Calendario"],
                &existing_titles,
            ) {
                Ok((title, date, is_duplicate)) => {
                    if let Some(title_str) = title.as_ref() {
                        println!("Title found: {title_str}");
                        existing_titles.insert(title_str.clone());

                        let title_hash = {
                            let mut hasher = Sha256::new();
                            hasher.update(title_str);
                            format!("{:x}", hasher.finalize())
                        };

                        // Handle the result of get_link here
                        let link = match get_link(&path) {
                            Ok(link) => link,
                            Err(err) => {
                                eprintln!("Error generating link: {err:?}");
                                continue; // Skip processing this entry and continue with the next one
                            },
                        };

                        let entry = Entry {
                            id: title_hash,
                            title,
                            date,
                            content: text,
                            link,
                        };

                        entries.push(entry);

                        // Move the PDF to the 'old' folder
                        let old_path =
                            old_folder.join(path.file_name().expect("Couldn't find file name for move operation."));
                        if let Err(err) = fs::rename(&path, &old_path) {
                            eprintln!("Error moving file: {err:?}");
                        }
                    } else if !is_duplicate {
                        println!("No title found");
                    }

                    if !is_duplicate {
                        date.map_or_else(
                            || {
                                println!("No date found");
                            },
                            |date| {
                                println!("Date found: {date}");
                            },
                        );
                    }
                },
                Err(err) => {
                    eprintln!("Error: {err:?}");
                },
            }
        }
    }

    let data: Data = Data { entries };

    let json_str: String = serde_json::to_string_pretty(&data)?;

    fs::write(&json_path, json_str)?;

    Ok(())
}
