/*let datajson;
fetch("data/lol/lol.json")
 .then(data=>data.json())
 .then(data=>{
   datajson=Object.values(data.data);
   
 })
*/

/*ESTRUCTURA BASE DE LA FUNCION
 function nombreFuncion: (parametros) => {

         return resultadoFuncion;
     }
*/
window.onload =() =>{

//FUNCIONES

/* 1 
let moviesFound = document.getElementById('show-movies');
document.getElementById('search-form').addEventListener("submit", (event) =>{
    event.preventDefault();
    socialMovie2();
    document.getElementById("root").style.display = "block";
   })
  
  
  const dataThemes2 = ['tt0995829', 'tt0467406', 'tt1847731', 'tt1659337', 'tt0159097']
  
  function socialMovie2 () {dataThemes2.map( function(item) {
    fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
      .then(res => res.json())
       .then(data => {
    
             document.getElementById("root").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
       })
    })
  }
*/
/* 2
let data = [];
for(i=1; i<=50; i++){
    let database = `http://www.omdbapi.com/?i=tt00000${i}&apikey=a963a012`;
    fetch(database)
    .then(response => response.json())
    .then(out => {
        if(out.Response === "True"){
            data.push(out);
        };
        showData(data);
    })
    .catch(error => { 
      document.getElementById('root').innerHTML = 'Error: ' + error;
    });
};

  const showData = (data) => {
    let allData = '';
      data.forEach(element => { 
        return allData += `<div>
             <p>Title: ${element.Title}</p>
             <p>Year: ${element.Year}</p>
             <p> Genre: ${element.Genre}</p>
             <p> Runtime: ${element.Runtime}</p>
             <p> Plot: ${element.Plot}</p>
             <p> Tipo: ${element.Type}</p>
             <p> Id: ${element.imdbID}</p>
          </div>`
      });
      document.getElementById('root').innerHTML = allData;
  };

const selectGenre = document.getElementById('genre');

selectGenre.addEventListener('change', ()=> {
  let condition = selectGenre.options[selectGenre.selectedIndex].value;
  let filtered = filterGenre(data, condition);
  let filteredData = '';
  filtered.forEach(element => {
    return filteredData += `<div>
   <div>
     <h5>${element.Title}</h5>
       <p> Genre: ${element.Genre}</p>
       <p> Runtime: ${element.Runtime}</p>
   </div>
 </div>`
  });
  document.getElementById('root').innerHTML = filteredData;
});

function filterGenre (data, condition) {
    const filteredGenre = data.filter(element => {
      return element.Genre.includes(condition,0)
    });
    return filteredGenre;
  }
*/


}


