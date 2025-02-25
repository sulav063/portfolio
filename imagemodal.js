document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".images img");
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let modalImage = document.createElement("img");
    let closeModal = document.createElement("span");
    let prevButton = document.createElement("button");
    let nextButton = document.createElement("button");

    let currentIndex = 0; // Track the currently displayed image

    // Add classes
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    closeModal.classList.add("close-button");
    prevButton.classList.add("nav-button", "prev-button");
    nextButton.classList.add("nav-button", "next-button");

    // Set button content
    closeModal.innerHTML = "&times;"; // Close button
    prevButton.innerHTML = "&#9665;"; // Left arrow (◀)
    nextButton.innerHTML = "&#9655;"; // Right arrow (▶)

    // Append elements
    modal.appendChild(prevButton);
    modal.appendChild(modalContent);
    modal.appendChild(nextButton);
    modalContent.appendChild(modalImage);
    modal.appendChild(closeModal);
    document.body.appendChild(modal);

    // Function to open modal with selected image
    function openModal(index) {
        if (index >= 0 && index < images.length) {
            currentIndex = index;
            modalImage.src = images[currentIndex].src;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }
    }

    // Click event for each image
    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Function to close the modal
    function closeModalFunc() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Close modal when clicking close button
    closeModal.addEventListener("click", closeModalFunc);

    // Close modal when pressing ESC key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModalFunc();
        }
    });

    // Navigate to previous image (Looping enabled)
    prevButton.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Go to last image if first image is reached
        openModal(currentIndex);
    });

    // Navigate to next image (Looping enabled)
    nextButton.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Go to first image if last image is reached
        openModal(currentIndex);
    });

    // Navigate using Keyboard (Left and Right Arrow Keys with Looping)
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowLeft") {
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Loop to last image
                openModal(currentIndex);
            } else if (event.key === "ArrowRight") {
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Loop to first image
                openModal(currentIndex);
            }
        }
    });

    // Close modal when clicking the background
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});
