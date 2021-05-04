function validateName(name) {
  if (name.length === 0) {
    return "Your name should have at least one character";
  } else if (name.length >= 50) {
    return "Your name should have less than 50 characters";
  } else if (!/^[a-z]+\s[a-z]+$/i.test(name)) {
    return "Please enter your name and your last name";
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
  removeError();
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
    errorsContainer.classList.add("hidden");
    sendForm();
    console.log("sending");
  }
}

function handleErrors(errors) {
  let errorsAmount = 0;
  const keys = Object.keys(errors);
  keys.forEach((key) => {
    const error = errors[key];
    const $error = "#" + key;
    if (error) {
      errorsAmount++;
      $form[key].id = "error";
      createError($error, error);
    } else {
      $form[key].id = "succes";
    }
  });
  return errorsAmount;
}

const errorAlert = () => {
  Swal.fire({
    title: "Oops...",
    html: " <p>Something went wrong.</p> <p> Please complete all fields!</p> ",
    icon: "warning",
    confirmButtonText: 'Ok  <i class="fa fa-thumbs-up"></i>',
  });
};

function createError($error, error) {
  errorAlert();
  const errorContainer = document.querySelector($error);
  const newP = document.createElement("p");
  newP.className = "error-info";
  newP.innerText = error;
  errorContainer.appendChild(newP);
}

function removeError() {
  const errorsNode = document.querySelectorAll(".error-info");
  errorsNode.forEach((error) => {
    error.remove();
  });
}
