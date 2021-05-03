function validateName(name) {
  if (name.length === 0) {
    return "Your name should have at least one character";
  } else if (name.length >= 20) {
    return "Your name should have less than 50 characters";
  } else if (!/^[a-z]+$/i.test(name)) {
    return "Your name can only contain letters";
  }
  return "";
}

function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length < 10) {
    return "Please enter a valid phone number";
  }
  return "";
}

function validateMail(mail) {
  if (mail.length < 1) {
    return "please enter a valid mail";
  }
  return "";
}

function validateForm() {
  removeError()
  const name = $form.name.value;
  const phoneNumber = $form.phoneNumber.value;
  const mail = $form.email.value;
  const nameError = validateName(name);
  const phoneNumberError = validatePhoneNumber(phoneNumber);
  const mailError = validateMail(mail);

  const errors = {
    name: nameError,
    phoneNumber: phoneNumberError,
    email: mailError,
  };
  const success = handleErrors(errors) === 0;
  if (success) {
    errorsContainer.classList.add('hidden')
    sendForm();
    console.log("sending");
  }
}
const errorsContainer = document.querySelector('.errors-container')

function handleErrors(errors) {
  let errorsAmount = 0;
  const keys = Object.keys(errors);
  keys.forEach((key) => {
    const error = errors[key];
    if (error) {
      errorsAmount++;
      
      $form[key].id = "error";
      createError(error)
    }
    else{
      $form[key].id = ''
      
    }
  });
  return errorsAmount;
}

function createError(error) {
  errorsContainer.classList.remove('hidden')
  const errorsUl = document.querySelector('.errors-container__ul')
  const newLi = document.createElement('li')
  newLi.className = 'new-li'
  newLi.innerText = error
  errorsUl.appendChild(newLi)
}

function removeError() {
  const liNode = document.querySelectorAll('.new-li')
  liNode.forEach(li => {
    li.remove()
  });
}