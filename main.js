//MANEJO DE DOM

/*  FETCH
let datajson;
fetch("llamada-data")
 .then(data=>data.json())
 .then(data=>{
   datajson=Object.values(data.data);
})
*/
M.AutoInit();

// INICIO DE TODO EL DOM
// window.onload =() =>{

  //FUNCIONES
  
  /* Función que filtra toda la data respecto a un nombre y las muestra */
  function getMoviesByName(searchText){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      let moviesFound = '';
    $.each(movies, (index,movie) => {
        moviesFound += `


        <div class="col s12 m7">
          <h2 class="header">${movie.Title}</h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="${movie.Poster}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
                <span onclick="getRatingByName('${movie.Title}') id="rank"> </span>
              </div>
              <div class="card-action">
                <a class="waves-effect waves-light btn modal-trigger" onclick="getMovieById('${movie.imdbID}')" href="#modal1">Detalles</a>
              </div>
            </div>
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
        let infoMovie = ` 
            <div class="modal-content">
                
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
        ` ;
        console.log('llega acá?');
        $('#modal1').html(infoMovie);
        
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
  });
  //BUSQUEDA POR GENERO
  
  // };