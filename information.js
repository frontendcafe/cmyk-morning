document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    let actividad;
    for (let i = 0; i < data.length; i++) {
        actividad = data[i]
        if (id == actividad.id) {
            break
        }
    }

    const title = document.getElementById("section__title-activity");

    //Activity
    title.innerHTML += actividad.sport

    //Activity image
    const mainImage = document.querySelector(".section__activity-image");
    mainImage.src = actividad.picture

    //Place
    const site = document.querySelector(".section__data-locality");
    site.innerHTML = `${actividad.city}, ${actividad.country}`

    //Date
    const calendarDay = document.getElementById("date")
    calendarDay.innerHTML = actividad.date

    //Activity price
    const price = document.querySelector(".section__info-price")
    price.innerHTML = actividad.cost

    //Registered people
    const signedUp = document.getElementById("registered-people")
    const signedupValue = actividad.enrolled
    signedUp.innerHTML = `${signedupValue}   people registred`





});