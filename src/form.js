const db = firebase.firestore();
const $form = document.form;
const $sendBtn = document.querySelector('#send-form');
let sport = 'cycling-individual';

const addParticipant = (sport, name, phone) => {
  db.collection('sports').doc(`${sport}`).collection('participants').add({
    name,
    phone,
  });
};

$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = $form.name;
  const phone = $form.phoneNumber;
  const response = await addParticipant(sport, name.value, phone.value);
});
