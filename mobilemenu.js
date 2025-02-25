document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".mobile-menu-icon");
    let mobileMenu = document.querySelector(".mobile-menu");

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener("click", function () {
            if (mobileMenu.style.display === "flex") {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "flex";
            }
        });

        // Close menu when clicking outside
        mobileMenu.addEventListener("click", function (event) {
            if (event.target === mobileMenu) {
                mobileMenu.style.display = "none";
            }
        });
    }
});
