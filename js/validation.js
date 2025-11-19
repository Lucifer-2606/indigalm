window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contactUs-form");
  const contactPopup = document.getElementById("contact");

  if (!form) {
    console.error("Form not found. Check the class name: .contactUs-form");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const date = document.getElementById("date");
    const message = document.getElementById("message");

    // Name
    if (name.value.trim() === "") {
      name.setCustomValidity("Please enter your name");
      isValid = false;
    } else {
      name.setCustomValidity("");
    }

    // Phone
    if (number.value.trim() === "") {
      number.setCustomValidity("Please enter your phone number");
      isValid = false;
    } else if (number.value.trim().length !== 10) {
      number.setCustomValidity("Phone number must be 10 digits");
      isValid = false;
    } else {
      number.setCustomValidity("");
    }

    // Date
    if (date.value.trim() === "") {
      date.setCustomValidity("Please enter a date");
      isValid = false;
    } else {
      date.setCustomValidity("");
    }

    // Message
    if (message.value.trim() === "") {
      message.setCustomValidity("Please enter a message");
      isValid = false;
    } else {
      message.setCustomValidity("");
    }

    if (!isValid) {
      form.reportValidity();
      return;
    }

    contactPopup.classList.add("show");
    setTimeout(() => {
      contactPopup.classList.remove("show");
    }, 2000);

    form.reset();
  });
});
