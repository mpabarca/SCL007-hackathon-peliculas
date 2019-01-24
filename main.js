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
// window.onload =() =>{

document.getElementById('search-form').addEventListener('submit',(event) => {
  let searchText = document.getElementById('search-text').value;
  let movies = window.functions.getMovies(searchText);
  event.preventDefault();
  });
// };