document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll Effect
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Active Navbar Link Highlight on Scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Ensure Proper Section Padding on Small Screens
    function adjustSectionPadding() {
        const headerHeight = document.querySelector(".header").offsetHeight;
        document.querySelectorAll("section").forEach(section => {
            section.style.paddingTop = `${headerHeight + 20}px`;
        });
    }
    window.addEventListener("resize", adjustSectionPadding);
    adjustSectionPadding();
});
