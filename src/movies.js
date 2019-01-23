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
        return axios.get('http://www.omdbapi.com/?apikey=8f262e4a&s='+searchText)
        .then((response)=>{
          let movies = response.data.Search;
          let moviesFound = '';
        //   return movies;
        $.each(movies, (index,movie) => {
            let movieName = movie.Title;
            let rank = window.functions.getRating(movieName);
            console.log('en ppal ' + rank);
            moviesFound += `
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>"${movie.Title}"</h5>
                    <button onclick="'${movie.imdbID}'" class="btn btn-primary" href="#">Detalles</button>
                    <span> Valoración:  "' `+ rank + `  '"   </span>
                    
                </div>  
            </div>
            `            
            });
            $('#show-movies').html(moviesFound);
        })
        .catch((err) => {
          console.log(err);
        }); 
    },

    getRating(movieName){
        axios.get('http://www.omdbapi.com/?apikey=8f262e4a&t='+movieName+'&plot=full')
        .then((response) => {
            let rating = '';
            rating = response.data.imdbRating;
            console.log(rating);
            return rating;
        })
        .catch((err) => {
            console.log(err);
            }); 
    }

    
    // getDetails(movieName){
    //     axios.get('http://www.omdbapi.com/?apikey=8f262e4a&t='+searchText+'&plot=full')

    // }
  
  
    
}

