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

//FUNCIONES

/* Función que filtra toda la data respecto a un nombre y las muestra */
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

/* Función que filtra toda la data respecto a una película en especial está lista para generar el modal */
function getMovieById(movieId){
  axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+movieId+'&plot=full')
  .then((response)=>{
      console.log(response);
      let movie = response.data;
      let moviesFound = ` 
      <div id="modal1" class="modal">
          <div class="modal-content">
              <div class = "col-md-4">
                  <img src = "${movie.Poster}" class="thumbnail">
              </div>
          <h4>${movie.Title}</h4>
          <ul class = "list-group">
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
                  <li class = "list-group-item"><strong>Género:</strong>${movie.Genre} </li>
              </ul>
          </div>
          <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
      </div>

      ` ;
  })
  .catch((err) => {
    console.log(err);
  }); 
}

/* Función que filtra toda la data respecto a una película en especial y muestra el Rating */
function getRatingByName(movieName){
  axios.get('http://www.omdbapi.com/?apikey=8f262e4a&t='+movieName+'&plot=full')
  .then((response) => {
      console.log('nombre ' + movieName)
      console.log(response.data.imdbRating)
      $('#rank').html(response.data.imdbRating);
  })
  .catch((err) => {
      console.log(err);
  }); 
}


//BUSQUEDA POR NOMBRE
let moviesFound = document.getElementById('show-movies');

document.getElementById('search-form').addEventListener('submit',(event) => {
  event.preventDefault();
  let searchText = document.getElementById('search-text').value;
    getMoviesByName(searchText);
    moviesFound = '';    
});
//BUSQUEDA POR GENERO

};
