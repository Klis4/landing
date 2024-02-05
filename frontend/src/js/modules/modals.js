export function imageModalInit() {
  const modal = document.getElementById("imageModal");

  const images = document.querySelectorAll(".image");
  const modalImage = document.getElementById("modalImage");

  const closeButton = document.querySelector(".image-modal__close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      modalImage.width = this.width;
      modalImage.height = this.height;
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

export function checkRequestModalInit() {
  const modal = document.getElementById("check-request-modal");

  const headerButton = document.querySelector(".header__check-request-btn");
  const heroButton = document.querySelector(".hero__check-request-btn");
  const commonButtons = document.querySelectorAll(".check-request_btn");

  const closeButton = document.querySelector(".image-modal__close");

  function openModal() {
    modal.style.display = "block";
  }

  headerButton.addEventListener("click", openModal);
  heroButton.addEventListener("click", openModal);
  commonButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
