import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(typeof data.films[0].director);

let sectionOne = document.getElementById("section1").innerHTML;
console.log(sectionOne);







let nombreDirector = "Isao Takahata";
let dataEjemplo = [
 {
    director: "Hayao Miyasaki",
    pelicula: "Porco Rosa"
 }

];
 

let filtroDirector = data.films.filter(item => {

    if (item.director === nombreDirector){
        console.log(item.director, item.title, item.rt_score, item.poster)
        let stringHtml = ` 
        <div class="card">
            <div class="top-row background-top-row">
                <h4>${item.title}</h4>
            </div>
            <img  class= "posterPelicula" src="${item.poster} alt="Imagen ${item.title}">
            <div class="content">
                <h3>${item.director}</h3>
                <h3>Ranking ${item.rt_score}</h3>
            <!-- <button class="button background-top-row">Empezar</button> -->
            </div>
        </div>`; 
        sectionOne += stringHtml;
        console.log(stringHtml)
        console.log("------------------------------------------------------------------------------------------");
    }

});

