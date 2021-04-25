const db = firebase.firestore();
const $form = document.form;
const $sendBtn = document.querySelector("#send-form");

const createUser = (name, phone) => {
  db.collection('users').doc().set({
    name,
    phone,
  });
};

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = $form.name;
  const phone = $form.phoneNumber;
  const response = await createUser(name.value, phone.value)
});
