// Add an event listener to the input field to handle user input
document.querySelector('#searchQuery').addEventListener('input', () => {
    // Delay the search by a short time to allow the user to finish typing
    clearTimeout(timeout);
    timeout = setTimeout(performSearch, 300); // Adjust the delay time as needed
});

// Add an event listener to the sort button
document.querySelector('#sortButton').addEventListener('click', sortResults);

// Add an event listener to the filter button
document.querySelector('#filterButton').addEventListener('click', filterResults);

// Initialize a timeout variable
let timeout;

// Initialize variables to store the search results
let searchResults = [];
let originalResults = [];
let filteredResults = [];

function sortResults() {
    // Get the selected sort option
    const sortOption = document.querySelector('#sortSelector').value;

    // Depending on the selected option, sort the results
    switch (sortOption) {
        case 'newest':
            filteredResults.sort((a, b) => b.date - a.date);
            break;
        case 'oldest':
            filteredResults.sort((a, b) => a.date - b.date);
            break;
        case 'relevance':
        default:
            // Restore the original order of the filtered results
            filteredResults = filteredResults.sort((a, b) => {
                const originalIndexA = filteredResults.indexOf(a);
                const originalIndexB = filteredResults.indexOf(b);
                return originalIndexA - originalIndexB;
            });
            break;
    }

    // Display the sorted results
    displayResults();
}

function filterResults() {
    const startDateInput = document.querySelector('#startDate').value;
    const endDateInput = document.querySelector('#endDate').value;

    // Check if both start and end date inputs are empty
    if (!startDateInput && !endDateInput) {
        // Reset the filtered results to the original results
        filteredResults = [...originalResults];
    } else {
        const startDate = new Date(startDateInput);
        const endDate = new Date(endDateInput);

        // Filter the originalResults array based on the date range
        filteredResults = originalResults.filter((entry) => {
            const entryDate = new Date(entry.date * 1000);
            return entryDate >= startDate && entryDate <= endDate;
        });
    }

    // Display the filtered results
    displayResults();
}

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
            // Store the search results and the original order
            searchResults = data.results;
            originalResults = [...searchResults];
            filteredResults = [...searchResults];

            // Display the results
            displayResults();
        })
        .catch((error) => {
            console.error('Error:', error);
            resultsContainer.innerHTML = 'An error occurred.';
        });
}

function displayResults() {
    const resultsContainer = document.querySelector('#results');

    // Clear the current results
    resultsContainer.innerHTML = '';

    // Loop through the filtered results and create HTML elements to display each entry
    filteredResults.forEach((entry) => {
        const pdfElement = document.createElement('div');
        pdfElement.classList.add('entry');

        // Create elements for each field of the PDFdoc struct
        const linkElement = document.createElement('a');
        linkElement.href = entry.link;
        linkElement.textContent = "View PDF";

        const titleElement = document.createElement('h2');
        titleElement.textContent = entry.title;

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${new Date(
            entry.date * 1000
        ).toDateString()}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = entry.content;

        // Append elements to the entry container in the desired order
        pdfElement.appendChild(linkElement); // "View PDF" button at the top
        pdfElement.appendChild(titleElement);
        pdfElement.appendChild(dateElement);
        pdfElement.appendChild(contentElement);

        // Append the entry container to the results container
        resultsContainer.appendChild(pdfElement);
    });
}
