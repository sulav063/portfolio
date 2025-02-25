document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".header").appendChild(menuToggle);

    const navbar = document.querySelector(".navbar");
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
        });
    });
});
