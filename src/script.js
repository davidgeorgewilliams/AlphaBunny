let pages = [];
let currentPage = 0;

// Load JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        pages = data;
        displayPage(currentPage);
    });

// Display a specific page
function displayPage(pageIndex) {
    const page = pages[pageIndex];
    document.getElementById('page-image').src = page.image;
    document.getElementById('page-text').textContent = page.text;
}

// Navigate to the previous page
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage);
    }
});

// Navigate to the next page
document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        displayPage(currentPage);
    }
});

