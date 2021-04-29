const db = firebase.firestore();
const $form = document.form;
const $sendBtn = document.querySelector('#send-form');
const increment = firebase.firestore.FieldValue.increment(1);
let sport = 'cycling-individual'; //To do: hacer que esta variable deporte vaya cambiando dependiendo de la pagina de deporte en la que estamos

const addParticipant = (sport, name, phone, email) => {
  db.collection('sports').doc(`${sport}`).collection('participants').add({
   name,
    phone,
    email,
    enrolled: new Date(),
  });
  db.collection('sports').doc(`${sport}`).update({ enrolled: increment });
};

$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = $form.name;
  const phone = $form.phoneNumber;
  const email = $form.email;
  const response = await addParticipant(
    sport,
    name.value,
    phone.value,
    email.value
  );
});
