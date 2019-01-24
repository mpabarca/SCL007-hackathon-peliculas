//MANEJO DE DOM

M.AutoInit();

  //FUNCIONES
  
  /* Función que filtra toda la data respecto a un nombre y las muestra */
  function getMoviesByName(searchText){
    document.getElementById("carousel").style.display="none";
    axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
    .then((response)=>{
      let movies =response.data.Search;
      
    $.each(movies, (index,movie) => {
      console.log(movie);
      let idMovie = movie.imdbID;
      console.log(idMovie);
      document.getElementById('show-movies').innerHTML += `
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
            <input type="text" class="validate">
            <label id="userIdentify" for="icon_prefix">Usuario</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="password" type="password" class="validate">
            <label id="enterPass" for="password">Constraseña</label>
          </div>
          <a onclick="login(`+ user +` , `+ pass +`)" class="waves-effect waves-light btn">Iniciar sesión</a>
          <h6>¿Aún no tienes una cuenta?</h6>
          <a class = "modal-trigger" onclick="register()" href="#modal1">Registate acá</a>
        </div>
      </form>
    `;
    user =  document.getElementById('userIdentify').innerHTML;
    pass = document.getElementById('enterPass').innerHTML;
    console.log('llega acá?' + user);
  });

  
  

  //BUSQUEDA POR GENERO
  
