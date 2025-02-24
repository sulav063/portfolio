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

/*image popup*/
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    document.body.appendChild(modal);
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modal.appendChild(modalContent);
    const modalImage = document.createElement("img");
    modalImage.classList.add("modal-image");
    modalContent.appendChild(modalImage);
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    modalContent.appendChild(closeButton);

    let scrollPosition = 0;

    images.forEach(img => {
        img.addEventListener("click", () => {
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            modal.style.display = "flex";
            modalImage.src = img.src;
            document.body.classList.add("modal-open");
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        requestAnimationFrame(() => {
            window.scrollTo(0, scrollPosition);
        });
    };

    // Click Events (Desktop)
    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    modalContent.addEventListener("click", (event) => event.stopPropagation());
    modalImage.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
    });

    // Touch Events (Mobile)
    closeButton.addEventListener("touchstart", closeModal);
    modal.addEventListener("touchstart", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    modalContent.addEventListener("touchstart", (event) => event.stopPropagation());
    modalImage.addEventListener("touchstart", (event) => {
        event.stopPropagation();
        event.preventDefault();
    });
});
