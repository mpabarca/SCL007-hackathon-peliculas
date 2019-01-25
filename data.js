 //FUNCIONES
  
  /* Función que filtra toda la data respecto a un nombre y las muestra */
  function getMoviesByName(searchText){
    console.log('Recibe peli Her');
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      let showMovies = document.getElementById('show-movies');
      document.getElementById("show-movies").style.display="block";
      showMovies.innerHTML = '';
    $.each(movies, (index,movie) => {
      let idMovie = movie.imdbID;
      showMovies.innerHTML += `
        <div class="col s12 m6 l4">
          <div class="card horizontal" id="card-horizontal">
            <div class="card-image">
              <img id="image" src="${movie.Poster}">
            </div>
            <div class="card-stacked">
              <div class="card-content" id="card-sum">
                <div id= "title-movie" class="header"><strong>${movie.Title}</strong></div>
                <span id="`+ idMovie +`"> </span>
              </div>
              <div class="card-action">
                <a id="more-detail" class="modal-trigger btn-floating btn-large waves-effect waves-light yellow-btn" onclick="getMovieById('`+idMovie+`')" href="#modal1"><i class="material-icons">add</i></a>
              </div>
            </div>
          </div>
        </div>
        `
        getRating(idMovie);
        });
    })
    .catch((err) => {
      console.log(err);
    }); 
  } 
  
  /* Función que filtra toda la data respecto a una película en especial está lista para generar el modal */
  function getMovieById(id){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+id+'&plot=full')
    .then((response)=>{
      let movie = response.data;    
      console.log(movie);
      document.getElementById('modal1').innerHTML = ` 
          <div class="modal-content">
            <div class="col s12 m7">
              <h2 class="header">${movie.Title}</h2>
              <div class="card horizontal">
                <div class="card-image">
                  <img class="responsive-img" src="${movie.Poster}">
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <ul class = "list-group">
                      <li class = "list-group-item">Genre: ${movie.Genre} </li>
                      <li class = "list-group-item">Director:</strong>${movie.Director} </li>
                      <li class = "list-group-item">Rating:</strong>${movie.imdbRating} </li>
                      <li class = "list-group-item">Awards:</strong>${movie.Awards} </li>
                      <li class = "list-group-item"><a href="${movie.Awards}">Imdb</a> </li>
                      <li class = "list-group-item">Trailer:</strong>${movie.Genre} </li>
                      <li class = "list-group-item">Plot:${movie.Plot}</li>
                    </ul>      
                  </div>
              </div>
            </div>
          </div>
          </div>
          <div class="modal-footer">
          <a class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
      ` ;        
    })
    .catch((err) => {
      console.log(err);
    }); 
  }
  
  /* Función que filtra toda la data respecto a una película en especial y muestra el Rating */
  function getRating(id){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+id+'&plot=full')
    .then((response) => {
      let datitos= response.data;
      console.log(datitos);
      let rating = response.data.imdbRating;
      document.getElementById(id).innerHTML = `Rating: `+rating;
      // $('#'+id).html(response.data.imdbRating);
    })
    .catch((err) => {
        console.log(err);
    }); 
  }

  //Página de aviso no está habilitado el registro
  function register(){
    document.getElementById('modal1').innerHTML = ` 
    <div class="modal-content center-align">
        
    <h4>¡Estamos trabajando para usted!<i class="material-icons">
    sentiment_satisfied_alt
    </i></h4>
    <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
    ` ;
  }

  //Oculta DIV's
  function noDivs(){
    document.getElementById('show-movies').style.display="none";
    document.getElementById('list-movies').style.display="none";
    document.getElementById('carousel').style.display="none";
    document.getElementById('jumbotrom').style.display="none";
  }
  //Muestra DIV's
  function yesDivs(){
    document.getElementById('list-movies').style.display="block";
    document.getElementById('carousel').style.display="block";
    document.getElementById('jumbotrom').style.display="block";
    document.getElementById('login').style.display="none";
    document.getElementById('search-text').value = '';
  }

  //LOGIN, se muestra
  function loginShow(){
    let user = '';
    let pass = '';
    noDivs();
    document.getElementById('login').style.display="block";
    let userIntro = document.getElementById('login');
    userIntro.innerHTML = '';
    userIntro.innerHTML = `
      <form class="col s12 center-align">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <label for="user">Usuario</label>
            <input id ="userIdentify" type="text" class="validate">
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="password" type="password" class="validate">
            <label for="password">Constraseña</label>
          </div>
          <a onclick="login("`+ user +`" ," `+ pass +`")" class="waves-effect waves-light btn">Iniciar sesión</a>
          <h6>¿Aún no tienes una cuenta?</h6>
          <a class = "modal-trigger" onclick="register()" href="#modal1">Registate acá</a>
        </div>
      </form>
    `;
    user =  document.getElementById('userIdentify').value;
    pass = document.getElementById('password').innerHTML;
  }

  function login(user,pass){
    console.log('Holi '+ user);
      // if (passw === 'profe'){
  }

  