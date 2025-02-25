document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "↑";
    scrollTopBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/*half scroll to another section*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let isScrolling = false;

    function getNearestSection() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        let nearestSection = sections[0];

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
                nearestSection = section;
            }
        });

        return nearestSection;
    }

    function autoScroll() {
        if (isScrolling) return;
        isScrolling = true;

        let nearestSection = getNearestSection();

        // If the user reaches the Photos section, disable auto-scroll
        if (nearestSection.id === "photos") {
            isScrolling = false;
            return;
        }

        window.scrollTo({
            top: nearestSection.offsetTop,
            behavior: "smooth"
        });

        setTimeout(() => {
            isScrolling = false;
        }, 800); // Prevents multiple triggers in quick succession
    }

    window.addEventListener("scroll", function () {
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(autoScroll, 300); // Delay to detect scrolling stop
    });
});
