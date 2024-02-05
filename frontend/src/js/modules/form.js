export function subscribeFormInit() {
  const form = document.getElementById("subscribe-form");
  const submitButton = document.getElementById("subscribe-form-btn");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitButton.textContent = "Спасибо";
    submitButton.classList.add("submitted");
  };

  form.addEventListener("submit", handleSubmit);
}
