document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.innerHTML = `<img src="${img.src}" alt="Photo"><span> class="close">&times;</span>`;
            modal.style.display = "flex";

            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
        });
    });
});
