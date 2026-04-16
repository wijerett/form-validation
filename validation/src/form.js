

const formBox = document.querySelector('.formBox');

export function form() {
  const formSheet = document.createElement('form');
  formSheet.classList.add('formSheet');
  formSheet.setAttribute("novalidate", "true");

  const email = document.createElement('input');
  email.setAttribute("id", "email");
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "email";
  
  

  const country = document.createElement('input');
  country.setAttribute("id", "country");
  const countryLabel = document.createElement('label');
  countryLabel.setAttribute("for", "country");
  countryLabel.textContent = "country";
  

  const postCode = document.createElement('input');
  postCode.setAttribute("id", "postCode");
  const postCodeLabel = document.createElement('label');
  postCodeLabel.setAttribute("for", "postCode");
  postCodeLabel.textContent = "post code";

  const password = document.createElement('input');
  password.setAttribute("id", "password");
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = "password";

  const passwordConf = document.createElement('input');
  passwordConf.setAttribute("id", "passwordConf");
  const passwordConfLabel = document.createElement('label');
  passwordConfLabel.textContent = "password confirmation";




  formSheet.appendChild(email);
  formSheet.appendChild(emailLabel);
  formSheet.appendChild(country);
  formSheet.appendChild(countryLabel);
  formSheet.appendChild(postCode);
  formSheet.appendChild(postCodeLabel);
  formSheet.appendChild(password);
  formSheet.appendChild(passwordLabel);
  formSheet.appendChild(passwordConf);
  formSheet.appendChild(passwordConfLabel);


  formBox.appendChild(formSheet);
};