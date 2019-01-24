/*let datajson;
fetch("data/lol/lol.json")
 .then(data=>data.json())
 .then(data=>{
   datajson=Object.values(data.data);
   
 })
*/
//AQUI SE AGREGAN TODAS LAS FUNCIONES A USAR EN DOM

/*ESTRUCTURA BASE DE LA FUNCION
 nombreFuncion: (parametros) => {

         return resultadoFuncion;
     },
     nombreFuncion2: (parametros) => {

         return resultadoFuncion2;
     } */

window.functions ={
    getMovies(searchText){
        //obtención data
        axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
        .then((response)=>{
          let movies = response.data.Search;
          let moviesFound = '';
        //   return movies;
        $.each(movies, (index,movie) => {
            let movieName = movie.Title;            
            moviesFound += `
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>"${movie.Title}"</h5>
                    <a onclick="window.functions.getMovie('${movie.imdbID}')" class="btn btn-primary" href="#">Detalles</a>
                    <span id="rank"> ` +  window.functions.getRating(movieName) + ` </span>
                </div>  
            </div>
            `            
            // window.functions.getRating(movieName);
            });
            $('#show-movies').html(moviesFound);
        })
        .catch((err) => {
          console.log(err);
        }); 
    },


    getMovie(movieId){
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
            // $('#show-movie').html(moviesFound);
            
        })
        .catch((err) => {
          console.log(err);
        }); 

    },

    getRating(movieName){
        axios.get('http://www.omdbapi.com/?apikey=8f262e4a&t='+movieName+'&plot=full')
        .then((response) => {
            console.log('nombre ' + movieName)
            console.log(response.data.imdbRating)
            // let writeRank = document.getElementById('rank');
            // writeRank.innerHTML =  response.data.imdbRating;
            $('#rank').html(response.data.imdbRating);
        })
        .catch((err) => {
            console.log(err);
        }); 
    }
 
}

