// logic.js 
// Logic for light/dark mode
document.addEventListener('DOMContentLoaded', function() {
    const currentMode = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentMode + '-mode');
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const backButton = document.getElementById('back');

    if (toggle) {
        toggle.addEventListener('click', function () {
            const body = document.body;
            body.classList.toggle('dark-mode');

            // Change the circle color attribute based on the mode
            const root = document.documentElement;
            if (body.classList.contains('dark-mode')) {
                root.style.setProperty('--circle-color', '#ffb100');
            } else {
                root.style.setProperty('--circle-color', '#fff');
            }
        });
    } else {
        console.error("Toggle button not found.");
    }

    if (backButton) {
        backButton.addEventListener('click', function () {
            redirectPage('index.html'); // Redirect to the landing page
        });
    } else {
        console.error("Back button not found.");
    }
});

// Function to read from local storage
function readLocalStorage() {
    const data = localStorage.getItem('blogPosts');
    return data ? JSON.parse(data) : [];
}

// Function to store new blog post
function storeLocalStorage(post) {
    const existingPosts = readLocalStorage();
    existingPosts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

// Redirect to a different page
let redirectURL = '';

const redirectPage = function(url) {
    redirectURL = url;
    location.assign(url);
};
