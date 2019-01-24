//MANEJO DE DOM

M.AutoInit();

  //FUNCIONES
  
  /* Función que filtra toda la data respecto a un nombre y las muestra */
  function getMoviesByName(searchText){
    document.getElementById("carousel").style.display="none";
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      let moviesFound = '';
    $.each(movies, (index,movie) => {
      console.log(movie);
      let idMovie = movie.imdbID;
      console.log(idMovie);
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
                <span id="`+idMovie+`"> </span>
              </div>
              <div class="card-action">
                <a class="waves-effect waves-light btn modal-trigger" onclick="getMovieById('`+idMovie+` ')" href="#modal1">Detalles</a>
              </div>
            </div>
          </div>
        </div>
        `
        getRating(idMovie);
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
  function getRating(id){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+id+'&plot=full')
    .then((response) => {
        $('#'+id).html(response.data.imdbRating);
    })
    .catch((err) => {
        console.log(err);
    }); 
  }
  
  //BUSQUEDA POR NOMBRE  
  
  document.getElementById('search-form').addEventListener('submit',(event) => {
    event.preventDefault();
    let searchText = document.getElementById('search-text').value;
      getMoviesByName(searchText); 
  });

  //LOGIN
  document.getElementById('login-access').addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('show-movies').innerHTML = '';
    let account = document.getElementById('login-access').innerHTML;
    account.innerHTML = `
    
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">First Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
      </form>
    </div>
          
    
    `
  });

  //BUSQUEDA POR GENERO
  
