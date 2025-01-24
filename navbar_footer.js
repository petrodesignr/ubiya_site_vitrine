// Function to load the navbar into the page
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar content into the div with id="navbar"
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

loadNavbar();

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert the footer content into the div with id="footer"
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load the navbar
loadFooter();