//MANEJO DE DOM

M.AutoInit();

  //FUNCIONES
  
  /* Función que filtra toda la data respecto a un nombre y las muestra */
  function getMoviesByName(searchText){
    document.getElementById("carousel").style.display="none";
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      let showMovies = document.getElementById('show-movies');
      document.getElementById("show-movies").style.display="block";
      showMovies.innerHTML = '';
    $.each(movies, (index,movie) => {
      console.log(movie);
      let idMovie = movie.imdbID;
      console.log(idMovie);
      showMovies.innerHTML += `
        <div class="col s12 m6 l4">
          <div class="card horizontal" id="card-horizontal">
            <div class="card-image">
              <img id="image" src="${movie.Poster}">
            </div>
            <div class="card-stacked">
              <div class="card-content" id="card-sum">
                <div id= "title-movie" class="header"><strong>${movie.Title}</strong></div>
                <span id="`+idMovie+`"> </span>
              </div>
              <div class="card-action">
                <a id="more-detail" class="btn-floating btn-large waves-effect waves-light red" onclick="getMovieById('`+idMovie+` ')" href="#modal1"><i class="material-icons">add</i></a>
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
  function getMovieById(movieId){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+movieId+'&plot=full')
    .then((response)=>{
        console.log(response);
        let movie = response.data;
        document.getElementById('modal1').innerHTML = ` 
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
    })
    .catch((err) => {
      console.log(err);
    }); 
  }
  
  /* Función que filtra toda la data respecto a una película en especial y muestra el Rating */
  function getRating(id){
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&i='+id+'&plot=full')
    .then((response) => {
      // let rating = response.data.imdbRating;
      // document.getElementById(id).innerHTML = rating;
      $('#'+id).html(response.data.imdbRating);
    })
    .catch((err) => {
        console.log(err);
    }); 
  }

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

  function login(user,pass){
    console.log('Holi '+user);
      // if (passw === 'profe'){

  }

  //BUSQUEDA POR NOMBRE  
  
  document.getElementById('search-form').addEventListener('submit',(event) => {
    event.preventDefault();
    let searchText = document.getElementById('search-text').value;
      getMoviesByName(searchText); 
  });

  //LOGIN
  document.getElementById('login-access').addEventListener('click',(event) => {
    event.preventDefault();
    let user = '';
    let pass = '';
    document.getElementById('show-movies').style.display="none";
    document.getElementById('list-movies').style.display="none";
    document.getElementById('carousel').style.display="none";
    document.getElementById('jumbotrom').style.display="none";
    let userIntro = document.getElementById('login');
    userIntro.innerHTML = '';
    userIntro.innerHTML = `
      <form class="col s12 center-align">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id ="userIdentify" type="text" class="validate">
            <label for="user">Usuario</label>
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
    console.log('llega acá?' + user);
  });

  //Muestra página Inicio
  document.getElementById('home').addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('list-movies').style.display="block";
    document.getElementById('carousel').style.display="block";
    document.getElementById('jumbotrom').style.display="block";
    document.getElementById('login').style.display="none";
    document.getElementById('search-text').value = '';
  });


  
  

  //BUSQUEDA POR GENERO
  

  // Menu responsive
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems);

  });
  document.getElementById('home-responsive').addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('list-movies').style.display="block";
    document.getElementById('carousel').style.display="block";
    document.getElementById('jumbotrom').style.display="block";
    document.getElementById('login').style.display="none";
    document.getElementById('search-text').value = '';
  });
  //LOGIN
  document.getElementById('login-responsive').addEventListener('click',(event) => {
    event.preventDefault();
    let user = '';
    let pass = '';
    document.getElementById('show-movies').style.display="none";
    document.getElementById('list-movies').style.display="none";
    document.getElementById('carousel').style.display="none";
    document.getElementById('jumbotrom').style.display="none";
    let userIntro = document.getElementById('login');
    userIntro.innerHTML = '';
    userIntro.innerHTML = `
      <form class="col s12 center-align">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id ="userIdentify" type="text" class="validate">
            <label for="user">Usuario</label>
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
    console.log('llega acá?' + user);
  });
