import data from './data/ghibli/ghibli.js';

//función que le pasamos como argumento el nombre del director en un string que se pasa automaticamente al darle clic.

let cardsPorDirector = (nombreDirectorSeleccionado) => {
    
  let nombreDirector = nombreDirectorSeleccionado;
  let stringHtml = ""; 
 //data.films tiene por dentro un array con varios objetos
  let filtroDirector = data.films.filter(item => {

      if (item.director === nombreDirector){
          stringHtml += ` 
          <div class="card">
              <div class="top-row background-top-row">
                  <h4>${item.title}</h4>
              </div>
              <img  class= "posterPelicula" src="${item.poster}" alt="Imagen ${item.title}">
              <div class="content">
                  <h3>${item.director}</h3>
                  <h3>Ranking ${item.rt_score}</h3>
              <!-- <button class="button background-top-row">Empezar</button> -->
              </div>
          </div>`; 
      }
  });
  return stringHtml;
};


export const mostrarTodas = () => {
  let stringHtml2 = "";
  let dataCards = data.films.map(item => {
      stringHtml2 += ` 
      <div class="card">
          <div class="top-row background-top-row">
              <h4>${item.title}</h4>
          </div>
          <img  class= "posterPelicula" src="${item.poster}" alt="Imagen ${item.title}">
          <div class="content">
              <h3>${item.director}</h3>
              <h3>Ranking ${item.rt_score}</h3>
          <!-- <button class="button background-top-row">Empezar</button> -->
          </div>
      </div>`;  
  })
  //sectionOne.innerHTML = stringHtml2;
  return stringHtml2;
};

//returnArray es una función que representa el arrglo en donde tenemos dos condiciones dependiendo de lo que queremos q haga
export const tipoOrden = (tipoDeOrdenamiento) => {
  let tipoOrden = tipoDeOrdenamiento;
  let returnArray = () => {
      let arrayTitles = data.films.map(item => {
          let titulo = item.title;
          return titulo;
      });
      if (tipoOrden === "Ascendente A-Z"){
          return arrayTitles.sort();
      }  else if (tipoOrden === "Descendente Z-A"){
          return arrayTitles.reverse();
      }

  };
  let stringSortHtml = "";
  let matchSortAz = returnArray().map(title => {

      let filmTitle = title;

      let filterTitle = data.films.filter(data => {
          if (data.title === filmTitle){
              stringSortHtml += ` 
          <div class="card">
              <div class="top-row background-top-row">
                  <h4>${data.title}</h4>
              </div>
              <img  class= "posterPelicula" src="${data.poster}" alt="Imagen ${data.title}">
              <div class="content">
                  <h3>${data.director}</h3>
                  <h3>Ranking ${data.rt_score}</h3>
              <!-- <button class="button background-top-row">Empezar</button> -->
              </div>
          </div>`;
          
          }
          
      });

  });
  return stringSortHtml;

};

export const tipoRanking = (tipoRanking) => {
  let tipoDeRanking = tipoRanking;
//En esta funcion vamos a crear dos arrays uno va a contener las peliculas de cielo 
//el otro las peliculas de tierra y se retornaria el array con las peliculas tierra 
  let returnRankingArray = () => {
      if (tipoDeRanking === "Cielo"){
          let arrayCielo = data.films.filter(film => Number(film.rt_score) >= 90);
          return arrayCielo;
      } 
      else {
          let arrayTierra = data.films.filter(film => Number(film.rt_score)  < 90); 
          return arrayTierra;
      }
  
  };

  let stringHtmlRanking = "";
  let matchRanking = returnRankingArray().map(film => {
      stringHtmlRanking +=  ` 
      <div class="card">
          <div class="top-row background-top-row">
              <h4>${film.title}</h4>
          </div>
          <img  class= "posterPelicula" src="${film.poster}" alt="Imagen ${film.title}">
          <div class="content">
              <h3>${film.director}</h3>
              <h3>Ranking ${film.rt_score}</h3>
          <!-- <button class="button background-top-row">Empezar</button> -->
          </div>
      </div>`;
  });
  return stringHtmlRanking;
};




















export default cardsPorDirector;

