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

	  <h3>${card.title}</h3>
	  <p>${card.location}</p>

	  <div class="footer-card">

	   <div class="icons">
	     <i class="fas fa-heart"></i>
	     <i class="fas fa-users"></i>
	   </div>
	   <p>${card.price}</p>

	  </div>

	</div>`;
      }
    }
  };
});
