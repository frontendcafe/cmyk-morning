document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  let actividad;

  db.collection('sports')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        actividad = doc.data();
        if (id == actividad.id) {
          const title = document.querySelector('.section__title-activity');

          //Activity
          title.innerHTML += actividad.sport;

          //Activity image
          const mainImage = document.querySelector('.section__image');
          mainImage.src = actividad.picture;

          //Place
          const site = document.querySelector('.section__data-locality');
          site.innerHTML = `${actividad.city}, ${actividad.country}`;

          //Date
          const calendarDay = document.querySelector('.section__date');
          calendarDay.innerHTML = actividad.date;

          //Activity price
          const price = document.querySelector('.section__price');
          price.innerHTML = actividad.cost;

          if (actividad.cost == 'Free') {
            price.className = 'section__free-item';
          }

          //Registered people
          const signedUp = document.querySelector(
            '.section__registered-people'
          );
          const signedupValue = actividad.enrolled;
          signedUp.innerHTML = `${signedupValue}   people registred`;

          document.querySelector('.form').setAttribute('id', doc.id);
        }
      });
    });
});
