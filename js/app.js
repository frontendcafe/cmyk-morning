const $cards = document.getElementById("cards");
const $card = document.querySelector(".card");

// ----------------- Data of the JSON in the cards -------------------------

db = firebase.firestore();

db.collection("sports")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let card = doc.data();

      $cards.innerHTML += ` 
      <a href="../information.html?id=${card.id}">
      <section class="card card-${card.index}">
        <div class="rectangle">
          <div class="card__title">${card.sport}</div>
          <p "card__location">${card.city}, ${card.country}</p>
        </div>
        <div class="footer-card">
          <div class="icons">
            <i class="fas fa-heart"></i>
          </div>
          <p>
            <i class="fas fa-users"></i> ${card.enrolled} personas inscritas
          </p>
          <p>${card.cost}</p>
        </div>
      </section>
      </a>
      `;
    });
  });

// ------------------------- Scroll of the cards --------------------------------------

document.querySelector(".buttonRight").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    $cards.scrollLeft += 300;
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    $cards.scrollLeft += 317 * 2;
  } else if (window.matchMedia("(max-width: 1200px)").matches) {
    $cards.scrollLeft += 317 * 3;
  } else if (window.matchMedia("(max-width: 1600px)").matches) {
    $cards.scrollLeft += 317 * 4;
  } else {
    $cards.scrollLeft += 317 * 5;
  }
});

document.querySelector(".buttonLeft").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    $cards.scrollLeft -= 300;
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    $cards.scrollLeft -= 317 * 2;
  } else if (window.matchMedia("(max-width: 1200px)").matches) {
    $cards.scrollLeft -= 317 * 3;
  } else if (window.matchMedia("(max-width: 1600px)").matches) {
    $cards.scrollLeft -= 317 * 4;
  } else {
    $cards.scrollLeft -= 317 * 5;
  }
});
