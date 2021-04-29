// Menu Responsive
document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
  });
  
  function eventListeners() {
    const mobileMenu = document.querySelector('.nav__mobileMenu');
  
    mobileMenu.addEventListener('click', navegacionResponsive);
  }
  
  function navegacionResponsive() {
    const navegacion = document.querySelector('.nav__link');
  
    if (navegacion.classList.contains('show')) {
      navegacion.classList.remove('show');
    } else {
      navegacion.classList.add('show');
    }
  }