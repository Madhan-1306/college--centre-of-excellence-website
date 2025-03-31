document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and the navigation
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    
    // Add click event to toggle the navigation menu
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
