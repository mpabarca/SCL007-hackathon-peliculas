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
  let searchText = document.getElementById('search-text').value;
  let ratingUser = document.getElementById('rating').valueAsNumber;
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
  getMoviesByName('Her');
  document.getElementById("carousel").style.display="none";
});

document.getElementById('home-responsive').addEventListener('click',(event) => {
  event.preventDefault();
  yesDivs();
  getMoviesByName('Her');
});


//Muestra pelis del ppio
document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();  
  getMoviesByName('Her');
});

//Filtra por género
spanValueFilter = Array.from(document.getElementsByClassName('span-filter'))
spanValueFilter.forEach(function(element){
  element.addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('carousel').style.display="none";
    let valueSpan = element.id;
    getMoviesByName(valueSpan);
  });
});
