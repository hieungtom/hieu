// I am yet to be familiar with JavaScript, but I researched a few very nice functions to add for my webpage
// and decided to add them while understanding them as much as I can



// Navbar shadow after scrolling down
document.addEventListener("DOMContentLoaded", function() { // EventListener for loading page
    const header = document.getElementById("header"); // Storing header

    window.addEventListener("scroll", function() { // After scrolling do this
        if (window.scrollY > 0) {
            header.classList.add("header-shadow"); // Add header-shadow class to header
        } else {
            header.classList.remove("header-shadow"); // If we are back at the starting page (scrollY !> 0) remove the class header-shadow
        }
    });
});



// Changing active link of the navbar based on a current position
document.addEventListener("scroll", function() { // After scrolling do this
    const sections = document.querySelectorAll("section"); // Storing all section elements
    const navLinks = document.querySelectorAll("nav ul li a"); // Storing all links of the navbar

    let currentSection = ""; // String variable to track current section

    sections.forEach(section => { // forEach section element cycle
        const sectionTop = section.offsetTop; // Distance from top of page
        const sectionHeight = section.clientHeight; // Height of the section

        if (scrollY >= sectionTop - sectionHeight / 3) { // Checking if section is in view
            currentSection = section.getAttribute("id"); // Store current section id
        }
    });

    navLinks.forEach(link => { // forEach link element cycle
        link.classList.remove("active"); // Remove active class from all links
        if (link.getAttribute("href").includes(currentSection)) { // If link points to the currentSection ID
            link.classList.add("active"); // Add active class to the current section's link
        }
    });
});


// Responsive navbar menu
function navMenu() {
    document.getElementById("navbar").classList.toggle("menu");
    document.getElementById("navbar-menu").classList.toggle("active");
}

