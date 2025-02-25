document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".images img"); // Select all images in the photos section
    let modal = document.createElement("div"); // Create modal dynamically
    let modalImage = document.createElement("img"); // Create image inside modal
    let closeModal = document.createElement("span"); // Create close button

    // Set up modal styling
    modal.classList.add("modal");
    modal.appendChild(modalImage);
    modal.appendChild(closeModal);
    document.body.appendChild(modal);
    
    closeModal.innerHTML = "&times;"; // Close button content
    closeModal.classList.add("close-button");

    images.forEach(image => {
        image.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = this.src; // Set clicked image source to modal image
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking the background but ensure photos section is visible
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the zoomed image
            document.querySelector("#photos").style.display = "block"; // Ensure photos section remains visible
        }
    });
});
