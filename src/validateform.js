function validateName(name) {
  if (name.length === 0) {
    return "This field should have at least one character";
  } else if (name.length >= 20) {
    return "This field should have less than 50 characters";
  } else if (!/^[a-z]+$/i.test(name)) {
    return "This field can only contain numbers and letters";
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
    sendForm();
    console.log("sending");
  }
}

function handleErrors(errors) {
  let errorsAmount = 0;
  const keys = Object.keys(errors);
  keys.forEach((key) => {
    const error = errors[key];
    if (error) {
      errorsAmount++;
      $form[key].className = "error";
    }
  });
  return errorsAmount;
}
