// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolled down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Scroll smoothly to the section
        });
    });
});
