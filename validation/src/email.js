import "./form.js";


const email = document.querySelector("#emailOne");

export function mail() {
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }
  if (!email.value.endsWith("@gmail.com")) {
    email.setCustomValidity("Enter a valid email address")
  }
};

email.addEventListener('blur', mail);
email.addEventListener('input', mail);