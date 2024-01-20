// Function to toggle visibility of content based on page
function showPage(pageId) {
    const pages = ['profile', 'connections', 'about', 'contact', 'login', 'register'];

    // Hide all pages
    pages.forEach(page => {
        const element = document.getElementById(page);
        if (element) {
            element.style.display = 'none';
        }
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// Initial setup - show the profile page
document.addEventListener('DOMContentLoaded', function () {
    showPage('profile');
});

// Button click events
document.getElementById('profile-button').addEventListener('click', function () {
    showPage('profile');
});

document.getElementById('connections-button').addEventListener('click', function () {
    showPage('connections');
});

document.getElementById('about-button').addEventListener('click', function () {
    showPage('about');
});

document.getElementById('contact-button').addEventListener('click', function () {
    showPage('contact');
});

document.getElementById('login-button').addEventListener('click', function () {
    showPage('login');
});

document.getElementById('register-button').addEventListener('click', function () {
    showPage('register');
});
