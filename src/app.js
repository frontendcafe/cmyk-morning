const $cards = document.getElementById("cards");
const $card = document.querySelector(".card");

// ----------------- Data of the JSON in the cards -------------------------

document.addEventListener("DOMContentLoaded", () => {
  const http = new XMLHttpRequest();
  const $container = document.querySelector("#cards");

  http.open("GET", "./sportsData.json", true);

  http.send();

  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      const cards = JSON.parse(http.responseText);

      $container.innerHTML = "";

      for (const card of cards) {
        $container.innerHTML += `
      <section class="card">
        <div class="rectangle">
        <h4 class="card__title">${card.sport}</h4>
        <p "card__location">${card.city}, ${card.country}</p>
        </div>
        <div class="footer-card">
          <div class="icons">
            <i class="fas fa-heart"></i>
          </div>
        <p>
            <i class="fas fa-users"></i> ${card.enrolled} personas inscritas</p>
        <p>${card.cost}</p>
        </div> 
      </section>
      
      `;
      }
    }
  };
});

// ------------------------- Scroll of the cards --------------------------------------

document.querySelector(".buttonRight").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    $cards.scrollLeft += 290;
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
    $cards.scrollLeft -= 317;
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