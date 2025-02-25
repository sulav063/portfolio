document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".page-loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1500);
});
