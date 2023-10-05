// Add an event listener to the input field to handle user input
document.querySelector('#searchQuery').addEventListener('input', () => {
    // Delay the search by a short time to allow the user to finish typing
    clearTimeout(timeout);
    timeout = setTimeout(performSearch, 300); // Adjust the delay time as needed
});

// Initialize a timeout variable
let timeout;

function performSearch() {
    const searchQuery = document.querySelector('#searchQuery').value;
    const resultsContainer = document.querySelector('#results');
    const loadingIndicator = document.createElement('p');
    loadingIndicator.textContent = 'Searching...';

    // Display the loading indicator
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(loadingIndicator);

    // Send a GET request to your Actix backend
    fetch(`/search?q=${encodeURIComponent(searchQuery)}`)
        .then((response) => response.json())
        .then((data) => {
            resultsContainer.innerHTML = ''; // Clear the loading indicator

            // Loop through the results and create HTML elements to display each entry
            data.results.forEach((entry) => {
                const pdfElement = document.createElement('div');
                pdfElement.classList.add('entry');

                // Create elements for each field of the PDFdoc struct
                const titleElement = document.createElement('h2');
                titleElement.textContent = entry.title;

                const dateElement = document.createElement('p');
                dateElement.textContent = `Date: ${new Date(
                    entry.date * 1000
                ).toDateString()}`;

                const contentElement = document.createElement('p');
                contentElement.textContent = entry.content;

                const linkElement = document.createElement('a');
                linkElement.href = entry.link;
                linkElement.textContent = "View PDF";

                // Append elements to the entry container
                pdfElement.appendChild(titleElement);
                pdfElement.appendChild(dateElement);
                pdfElement.appendChild(contentElement);
                pdfElement.appendChild(linkElement);

                // Append the entry container to the results container
                resultsContainer.appendChild(pdfElement);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            resultsContainer.innerHTML = 'An error occurred.';
        });
}
