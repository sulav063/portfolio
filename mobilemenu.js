document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".images img");
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let modalImage = document.createElement("img");
    let closeModal = document.createElement("span");
    let prevButton = document.createElement("button");
    let nextButton = document.createElement("button");

    let currentIndex = 0;

    // Add classes
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    closeModal.classList.add("close-button");
    prevButton.classList.add("nav-button", "prev-button");
    nextButton.classList.add("nav-button", "next-button");

    // Set button content
    closeModal.innerHTML = "&times;";
    prevButton.innerHTML = "&#9665;"; // Left arrow ◀
    nextButton.innerHTML = "&#9655;"; // Right arrow ▶

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

            // Ensure buttons are visible
            prevButton.style.display = "flex";
            nextButton.style.display = "flex";
        }
    }

    // Close modal function
    function closeModalFunction() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Navigate previous (Looping enabled)
    function showPrevious() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        openModal(currentIndex);
    }

    // Navigate next (Looping enabled)
    function showNext() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        openModal(currentIndex);
    }

    // Attach click event for each image
    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Click Events
    prevButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showPrevious();
    });

    nextButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showNext();
    });

    closeModal.addEventListener("click", function (event) {
        event.stopPropagation();
        closeModalFunction();
    });

    // Close modal when clicking the background
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    });

    // Handle keyboard navigation
    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "Escape") {
                closeModalFunction();
            } else if (event.key === "ArrowLeft") {
                showPrevious();
            } else if (event.key === "ArrowRight") {
                showNext();
            }
        }
    });
});
