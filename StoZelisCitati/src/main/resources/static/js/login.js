// Example JavaScript for login page

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-container form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Implement login logic here
        console.log("Logging in...");
        // You can use AJAX here to submit the form without refreshing the page
    });
});