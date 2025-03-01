const form = document.querySelector('#form');
const firstName = form.querySelector('#firstName');
const lastName = form.querySelector('#lastName');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');

function nameValid(name) {
    const reg = /^[a-zA-Z]{3,}$/;
    return reg.test(name);
  }
  
  function emailValid(email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  // firstName
    if (firstName.value.trim() === "") {
        error(firstName, 'First Name cannot by empty');
        firstName.placeholder = '';
    } else if (nameValid(firstName.value)) {
        success(firstName)
    }

    // lastName 
    if (lastName.value.trim() === "") {
      error(lastName, 'Last Name cannot by empty');
      lastName.placeholder = '';
  } else if (nameValid(lastName.value)) {
      success(lastName)
  }

  // email
  if(emailInput.value.trim() === "") {
    error(emailInput, 'Looks like this os not an email');
    emailInput.placeholder = '';
  } else if (emailValid(emailInput.value)) {
    success(emailInput);
  }

  // password
  if(passwordInput.value.trim() === "") {
    error(passwordInput, 'Password cannot by empty');
    passwordInput.placeholder = '';
  } else {
    success(passwordInput);
  }
}

function error(element, message) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')) {
      parent.classList.remove('success');
    }
    parent.classList.add('error');
    const p = parent.querySelector('p');
    p.textContent = message;
}

function success(element) {
  const parent = element.parentElement;
  parent.classList.add('success');
  if(parent.classList.contains('success')) {
    parent.classList.remove('error')
  }
  const p = parent.querySelector('p')
}
