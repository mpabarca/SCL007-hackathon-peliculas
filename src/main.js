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

// Menu responsive
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  window.M.Sidenav.init(elems);
});

//Muestra pelis del ppio
document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();  
  getMoviesByName('Her');

});

//BUSQUEDA POR GENERO




