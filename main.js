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
});

//LOGIN
document.getElementById('login-access').addEventListener('click',(event) => {
  event.preventDefault();
  loginShow()
});

document.getElementById('login-responsive').addEventListener('click',(event) => {
  event.preventDefault();
  loginShow();
});

//Muestra página Inicio
document.getElementById('home').addEventListener('click',(event) => {
  event.preventDefault();
  yesDivs()
});

document.getElementById('home-responsive').addEventListener('click',(event) => {
  event.preventDefault();
  yesDivs();
});

//Muestra pelis del ppio
document.getElementById('list-movies').addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  
  getMoviesByName(searchText);
});


