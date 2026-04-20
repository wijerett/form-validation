import ("./form.js");

export function submit() {
  const submitBtn = document.querySelector("#submit")
  const mail = document.querySelector("#emailOne");
  const inpCountry = document.querySelector("#countryOne");
  const postCode = document.querySelector("#postCode");
  const password = document.querySelector("#passwordOne");
  const passwordConf = document.querySelector("#passwordConf");


  submitBtn.addEventListener('click', () => {
    mail.textContent = "";
    inpCountry.textContent = "";
    postCode.textContent = "";
    password.textContent = "";
    passwordConf.textContent = "";
  })
}