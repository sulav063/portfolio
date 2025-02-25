document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "&#9776;"; // ☰ icon
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".header").appendChild(menuToggle);

    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
        if (navbar.classList.contains("open")) {
            menuToggle.innerHTML = "&times;"; // Change to ✖ when menu is open
        } else {
            menuToggle.innerHTML = "&#9776;"; // Change back to ☰ when menu is closed
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuToggle.innerHTML = "&#9776;"; // Reset to ☰ when closing menu
        });
    });
});
