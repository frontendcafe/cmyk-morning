const db = firebase.firestore();
const $form = document.form;
const $sendBtn = document.querySelector("#send-form");

const increment = firebase.firestore.FieldValue.increment(1);

const addParticipant = (sport, name, phone, email) => {
  db.collection("sports")
    .doc(`${sport}`)
    .collection("participants")
    .add({
      name,
      phone,
      email,
      enrolled: new Date(),
    })
    .then(() => {
      console.log("Document successfully written!");
      succesAlert(name);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  incrementEnrolled(sport);
}


$form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm()
  
});

const sendForm = async (e) => {
  const sport = $form.id;
  const name = $form.name;
  const phone = $form.phoneNumber;
  const email = $form.email;
  const response = await addParticipant(
    sport,
    name.value,
    phone.value,
    email.value
  );
}
const incrementEnrolled = (sport) => {
  db.collection("sports").doc(`${sport}`).update({ enrolled: increment });
};


const succesAlert = (name) => {
  Swal.fire("Done " + name + "!", "Registration succesfull", "success").then(
    (isConfirm) => {
      location.reload();
    }
  );
};

