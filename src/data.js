import data from './data/ghibli/ghibli.js';
import {tarjeta} from './main.js';

//función que le pasamos como argumento el nombre del director en un string que se pasa automaticamente al darle clic.

const cardsPorDirector = (nombreDirectorSeleccionado) => {
    
  let nombreDirector = nombreDirectorSeleccionado;
  let stringHtml = ""; 
 //data.films tiene por dentro un array con varios objetos
  data.films.filter(item => {
    if (item.director === nombreDirector){
      stringHtml += tarjeta(item)
    }
  });
  return stringHtml;
};

//funcion card peliculas


export const mostrarTodas = () => {
  let stringHtml2 = "";
  data.films.map(item => {
    stringHtml2 += tarjeta(item)
  });
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
  returnArray().map(title => {
    let filmTitle = title;
    data.films.filter(item => {
      if (item.title === filmTitle){
        stringSortHtml += tarjeta(item)
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
  returnRankingArray().map(film => {
    stringHtmlRanking +=  tarjeta(film)
  });
  return stringHtmlRanking;
};

export default cardsPorDirector;