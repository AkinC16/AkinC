// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add any JavaScript code here for interactions or animations
    // For example, smooth scrolling to anchor links:
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        const offset = 60; // Adjust this value to control the offset from the top
        const scrollOptions = {
            behavior: 'smooth'
        };
        window.scroll({
            top: target.getBoundingClientRect().top + window.scrollY - offset,
            left: 0,
            ...scrollOptions
        });
    }

    // Add any other custom JavaScript functionality you want
});
