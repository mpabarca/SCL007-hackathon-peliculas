//MANEJO DE DOM

/*  FETCH
let datajson;
fetch("llamada-data")
 .then(data=>data.json())
 .then(data=>{
   datajson=Object.values(data.data);
})
*/


// INICIO DE TODO EL DOM
window.onload =() =>{

let moviesFound = document.getElementById('show-movies');

document.getElementById('search-form').addEventListener('submit',(event) => {
  event.preventDefault();
  let searchText = document.getElementById('search-text').value;
  let movies = window.functions.getMovies(searchText);
  let showMovies = '';
  moviesFound = '';
  console.log('en DOM' + movies);
  // movies.forEach(element => {
  //   console.log('movie solo' + movie);
  //   moviesFound.innerHTML += `
  //   <div class="col-md-3">
  //       <div class="well text-center>
  //           <img src="${element.Poster}">
  //           <h5>${element.Title}</h5>
  //           <a onclick="movieSelected('${element.imdbID}')" class="btn btn-primary" href="#">Detalles</a>
  //       </div>  
  //   </div>
  //   `
  // });

    
  });


};