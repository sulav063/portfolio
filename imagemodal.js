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

    // Create modal elements
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

    // Open modal
    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = img.src;
            document.body.classList.add("modal-open");
        });
    });

    // Close modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    // Prevent closing when clicking inside modal content
    modalContent.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Close modal ONLY when clicking the modal background
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });

    // Prevent image click and zoom
    modalImage.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
    });
});
