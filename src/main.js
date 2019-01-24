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


function getMoviesByName(searchText){
  axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
  .then((response)=>{
    let movies =response.data.Search;
    let moviesFound = '';
  $.each(movies, (index,movie) => {
      console.log('movie solo' + movie);
      moviesFound += `
      <div class="col-md-3">
          <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Detalles</a>
          </div>  
      </div>
      `
      });
      $('#show-movies').html(moviesFound);
  })
  .catch((err) => {
    console.log(err);
  }); 
} 

let moviesFound = document.getElementById('show-movies');

document.getElementById('search-form').addEventListener('submit',(event) => {
  event.preventDefault();
  let searchText = document.getElementById('search-text').value;
    getMoviesByName(searchText);
    moviesFound = '';    
});


};
