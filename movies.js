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
            console.log(response);
          let movies = response.data.Search;
          console.log('movies array? '+ Object.values(movies));
          let moviesFound = '';
        //   return movies;
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
  
  
    
}

