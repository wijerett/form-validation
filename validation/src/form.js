import "./submit.js";


const formBox = document.querySelector('.formBox');

export function form() {

  const formSheet = document.createElement('form');
  formSheet.classList.add('formSheet');
  formSheet.setAttribute("novalidate", "");

  const email = document.createElement('input');
  email.setAttribute("id", "emailOne");
  email.setAttribute("type", "email");
  
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute("for", "emailOne");
  emailLabel.innerHTML = "email";

  ['input', 'blur'].forEach(type => {
    email.addEventListener(type, (event) => {
      email.setCustomValidity("");
      if (!email.validity.valid) {
        if (type === 'blur') email.reportValidity();
        return;
      }
      if (!email.value.endsWith("@gmail.com")) {
        email.setCustomValidity("Enter a valid email address");
      }
      if (type === 'blur') email.reportValidity();
    });
  });

  const country = document.createElement('input');
  country.setAttribute("id", "countryOne");
  const countryLabel = document.createElement('label');
  countryLabel.setAttribute("for", "countryOne");
  countryLabel.textContent = "country";

  ['input', 'blur'].forEach(type => {
    country.addEventListener(type, (event) => {
      country.setCustomValidity("");
      if (country.value.length === 2) {
        if (type === 'blur') country.reportValidity();
        return;
      };
      if (country.value.length > 2) {
        country.setCustomValidity("Please enter country as 2 digits");
      } else if (country.value.length < 2) {
        country.setCustomValidity("Please enter country as 2 digits");
      }
      if (type === 'blur') country.reportValidity();
    });
  });

  const postCode = document.createElement('input');
  postCode.setAttribute("id", "postCode");
  const postCodeLabel = document.createElement('label');
  postCodeLabel.setAttribute("for", "postCode");
  postCodeLabel.textContent = "post code";

  ['input', 'blur'].forEach(type => {
    postCode.addEventListener(type, (event) => {
      postCode.setCustomValidity("");
      if (postCode.value.length == 5) {
        if (type === 'blur') postCode.reportValidity();
        return;
      }
      if (postCode.value.length > 5) {
        postCode.setCustomValidity("Postal codes must be 5 numerical figures long");
      } else if (postCode.value.length < 5) {
        postCode.setCustomValidity("Postal codes must be 5 numerical figures long");
      }
      if (type === 'blur') postCode.reportValidity();
    });
  });
  const password = document.createElement('input');
  password.setAttribute("id", "passwordOne");
  password.setAttribute("type", "password");
  password.setAttribute("pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
  //password.setAttribute("title", "Must contain at least one uppercase and lowercase letter, one number and and at least 8 or more characters");
  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute("for", "passwordOne");
  passwordLabel.textContent = "password";

  ['input', 'blur'].forEach(type => {
    password.addEventListener(type, (event) => {
      password.setCustomValidity("");
      if (password.value.patternMismatch) {
        password.setCustomValidity(password.title);
      } else {
        password.setCustomValidity("");
      }
      if (type === 'blur') password.reportValidity();
    });
  });

  const passwordConf = document.createElement('input');
  passwordConf.setAttribute("id", "passwordConf");
  passwordConf.setAttribute("type", "password");
  const passwordConfLabel = document.createElement('label');
  passwordConfLabel.setAttribute("for", "passwordConf");
  passwordConfLabel.textContent = "password confirmation";

  ['input', 'blur'].forEach(type => {
    passwordConf.addEventListener(type, (event) => {
      if (passwordConf.value !== password.value) {
        passwordConf.setCustomValidity("Passwords do not match");
      } else {
        passwordConf.setCustomValidity("");
      }
      if (type === 'blur') passwordConf.reportValidity();
    });
  });

  const submit = document.createElement('button');
  submit.setAttribute("id", "submit");
  submit.setAttribute("type", "submit");
  submit.textContent = "submit";

  formSheet.addEventListener("submit", (e) => {
    e.preventDefault();
  });

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
  formSheet.appendChild(submit);

  formBox.appendChild(formSheet);
};

