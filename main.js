//MANEJO DE DOM

M.AutoInit();
$(document).ready(function(){
  $('.go-up').click(function(){
        $('body, html').animate({
              scrollTop: '0px'
        });
  });
  $('.sidenav').sidenav();
});

//BUSQUEDA POR NOMBRE  
document.getElementById('search-form').addEventListener('submit',(event) => {
  event.preventDefault();
  let searchText = document.getElementById('search-text').value;
  getMoviesByName(searchText); 
  document.getElementById("carousel").style.display="none";
});
//BUSQUEDA POR GENERO

//BUSQUEDA POR RATING
document.getElementById('range-rating').addEventListener('submit',(event) => {
  event.preventDefault();
  document.getElementById("carousel").style.display="none";
  let ratingUser = document.getElementById('rating').value;
  compareRating(ratingUser);
  
});

//LOGIN
document.getElementById('login-access').addEventListener('click',(event) => {
  event.preventDefault();
  document.getElementById("filterBar").style.display="none";
  loginShow();
  
});

document.getElementById('login-responsive').addEventListener('click',(event) => {
  event.preventDefault();
  loginShow();
});

//Muestra página Inicio
document.getElementById('home').addEventListener('click',(event) => {
  event.preventDefault();
  yesDivs();
  document.getElementById("carousel").style.display="none";
});

document.getElementById('home-responsive').addEventListener('click',(event) => {
  event.preventDefault();
  yesDivs();
});


//Muestra pelis del ppio
document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();  
  getMoviesByName('Her');

});
