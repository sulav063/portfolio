document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".header").appendChild(menuToggle);

    const navbar = document.querySelector(".navbar");

    // Ensure Contact is in the menu
    if (!document.querySelector('.navbar a[href="#contact"]')) {
        navbar.innerHTML += `<a href="#contact">Contact</a>`;
    }

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

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    // 🔥 Check if Contact is missing, then add it
    if (!document.querySelector('.navbar a[href="#contact"]')) {
        const contactLink = document.createElement("a");
        contactLink.href = "#contact";
        contactLink.textContent = "Contact";
        navbar.appendChild(contactLink);
    }
});
