const $cards = document.getElementById("cards");
const $card = document.querySelector(".card");

// ----------------- Data of the JSON in the cards -------------------------

document.addEventListener("DOMContentLoaded", () => {
  const http = new XMLHttpRequest();
  const $container = document.querySelector("#cards");

  http.open("GET", "./cards.json", true);

  http.send();

  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      const cards = JSON.parse(http.responseText);

      $container.innerHTML = "";

      for (const card of cards) {
        $container.innerHTML += `

	<div class="card">

	  <h3>${card.sport}</h3>
	  <p>${card.city}, ${card.country}</p>

	  <div class="footer-card">

	   <div class="icons">
	     <i class="fas fa-heart"></i>
	     <i class="fas fa-users"></i>
	   </div>
	   <p>${card.cost}</p>

	  </div>

	</div>

	  `;
      }
    }
  };
});

// ------------------------- Scroll of the cards --------------------------------------

document.querySelector(".buttonRight").addEventListener("click", () => {


  if (window.matchMedia("(max-width: 600px)").matches) {

    $cards.scrollLeft += 317;

  } else if (window.matchMedia("(max-width: 900px)").matches) {

    $cards.scrollLeft += 317*2;

  } else if (window.matchMedia("(max-width: 1200px)").matches) {

    $cards.scrollLeft += 317*3;

  } else if (window.matchMedia("(max-width: 1600px)").matches) {

    $cards.scrollLeft += 317*4;

  } else {

    $cards.scrollLeft += 317*5;

  }


});



document.querySelector(".buttonLeft").addEventListener("click", () => {


  if (window.matchMedia("(max-width: 600px)").matches) {

    $cards.scrollLeft -= 317;

  } else if (window.matchMedia("(max-width: 900px)").matches) {

    $cards.scrollLeft -= 317*2;

  } else if (window.matchMedia("(max-width: 1200px)").matches) {

    $cards.scrollLeft -= 317*3;

  } else if (window.matchMedia("(max-width: 1600px)").matches) {

    $cards.scrollLeft -= 317*4;

  } else {

    $cards.scrollLeft -= 317*5;

  }


});
