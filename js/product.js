window.addEventListener("DOMContentLoaded", () => {
  // Product Magnifying
const container = document.querySelector(".product-img");
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = lightbox.querySelector("img");

// Open lightbox on image click
container.addEventListener("click", () => {
  const mainImg = container.querySelector("img");
  lightboxImg.src = mainImg.src;

  // Make sure display is reset before showing
  lightbox.style.display = "flex";
  // Force reflow to ensure CSS transition re-runs
  void lightbox.offsetWidth;
  lightbox.classList.add("show");
});

// Close lightbox when clicking anywhere
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");

  // Wait for the fade-out animation to finish before hiding
  lightbox.addEventListener(
    "transitionend",
    () => {
      if (!lightbox.classList.contains("show")) {
        lightbox.style.display = "none";
      }
    },
    { once: true }
  );
});

  // Close lightbox when clicking anywhere
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // AddToCart Increasing or Decreasing Number
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityDisplay = document.getElementById("quantity");

  let quantity = 1;

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });
});
