const db = firebase.firestore();
const $form = document.form;
const $sendBtn = document.querySelector('#send-form');
const increment = firebase.firestore.FieldValue.increment(1);
let sport = 'cycling-individual';

const addParticipant = (sport, name, phone) => {
  db.collection('sports').doc(`${sport}`).collection('participants').add({
    name,
    phone,
  });
  db.collection('sports').doc(`${sport}`).update({ enrolled: increment });
};

$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = $form.name;
  const phone = $form.phoneNumber;
  const response = await addParticipant(sport, name.value, phone.value);
});
