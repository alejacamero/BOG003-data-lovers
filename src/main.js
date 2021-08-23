import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(typeof data.films[0].director);
console.log(data.films[0].title);


let sectionOne = document.getElementById("section1");
console.log(sectionOne);


let nombreDirectorPrincipal = document.getElementById("HiroyukiMorita").innerHTML;
console.log(nombreDirectorPrincipal);

let nombreDirectorPrincipal1 = document.getElementById("GorōMiyazaki").innerHTML;
console.log(nombreDirectorPrincipal1);

let nombreDirectorPrincipal2 = document.getElementById("HiromasaYonebayashi").innerHTML;
console.log(nombreDirectorPrincipal2);

let nombreDirectorPrincipal3 = document.getElementById("YoshifumiKondō").innerHTML;
console.log(nombreDirectorPrincipal3);

let nombreDirectorPrincipal4 = document.getElementById("IsaoTakahata").innerHTML;
console.log(nombreDirectorPrincipal4);

let nombreDirectorPrincipal5 = document.getElementById("HayaoMiyazaki").innerHTML;
console.log(nombreDirectorPrincipal5);



/*document.getElementById("menuFiltro").addEventListener("click",function menuFiltro() {
    document.getElementById("menuFiltro").style.display = "none";
    document.getElementById("ordenarAz").style.display = "block";
   
} );*/


document.getElementById("aFiltro").addEventListener("click", function desplegarMenu() {
    document.getElementById("menuCategorias").style.display ="flex";

} );


/*let funcionEjemplo = (colorRecibido, altoRecibido, anchoRecibido, volumenRecibido) => {

    console.log(colorRecibido);
    
    let color = colorRecibido;
    console.log(color);
    let alto = altoRecibido;
    console.log(alto);
    let ancho = anchoRecibido;
    console.log(ancho);
    let volumen = volumenRecibido;
    console.log(volumen);

}


funcionEjemplo("azul","1000", "2000", "diez");

let arbolCaracteristicas = (tamañoRecibido, colorRecibido, numeroHojasRecibido) => {

    let tamaño = tamañoRecibido;
    let color = colorRecibido;
    let numeroHojas = numeroHojasRecibido;
    console.log(tamaño, color, numeroHojas);
}

arbolCaracteristicas("100metros", "azulTurqueza", 18);

let paisesLatinoamerica = (primerPais,segundoPais,tercerPais, cuartoPais) => {

    let pais1 = primerPais;
    let pais2 = segundoPais;
    let pais3 = tercerPais;
    let pais4 = cuartoPais;
    alert(`${pais1} ${pais2} ${pais3} ${pais4}`);
}
paisesLatinoamerica("argentina", "colombia", "brazil", "chile");

//crear una funcion que reciba dos variables o argumentos y por un lado tiene una variable que recibe la data  y por otro lado una que reciba un string con el nombre de director
//Crear una funciones que musetre 4 paises, con un alert que imprima con la sistasis ecma script 6,  

//crear una funcion q tenga como variable las caracteriticas de un arblo y e imprima un console.log concatenada
//primer paso: crearnos una variable o  segundo argumento de la funcion
//segundo paso :asignarle esa variable o rgumento a mi variabl alto
//tercer paso :darle valor a esa variable o argumeneto cuando llamamos la funcionen la linea 103



/*for (let i=0; i < menuFiltro.length; i++) {
    menuFiltro[i].addEventListener("click", function() {
      if (window.innerWidth < 1024)[

      ]
    });
} */

/*document.querySelectorAll(`.menuCategorias`).forEach(element => {
    element.addEventListener("click", (e) => {
      //console.log(e.target.menufiltro.menuCategorias);
      alert("hola");
    });
});
*/
//función Filter

let cardsPorDirector = (nombreDirectorSeleccionado) => {
    
    let nombreDirector = nombreDirectorSeleccionado;
    let stringHtml = ""; 
   //data.films tiene por dentro un array con varios objetos
    let filtroDirector = data.films.filter(item => {

        if (item.director === nombreDirector){
            console.log(item.director, item.title, item.rt_score, item.poster)
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
        };
    });
    sectionOne.innerHTML = stringHtml;
    console.log(sectionOne);

};

//Menu desplegable categorias

document.getElementById("HayaoMiyazaki").addEventListener("click", function desplegarDirector() {
    let directorHayao = document.getElementById("HayaoMiyazaki").innerHTML;
    cardsPorDirector(directorHayao);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("IsaoTakahata");
document.getElementById("IsaoTakahata").addEventListener("click", function desplegarDirector() {
    let directorIsao = document.getElementById("IsaoTakahata").innerHTML;
    cardsPorDirector(directorIsao);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("HiroyukiMorita");

document.getElementById("HiroyukiMorita").addEventListener("click", function desplegarDirector() {
    let directorHiroyu = document.getElementById("HiroyukiMorita").innerHTML;
    cardsPorDirector(directorHiroyu);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("GorōMiyazaki");

document.getElementById("GorōMiyazaki").addEventListener("click", function desplegarDirector() {
    let directorGoro = document.getElementById("GorōMiyazaki").innerHTML;
    cardsPorDirector(directorGoro);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("HiromasaYonebayashi");
document.getElementById("HiromasaYonebayashi").addEventListener("click", function desplegarDirector() {
    let directorHiromasa = document.getElementById("HiromasaYonebayashi").innerHTML;
    cardsPorDirector(directorHiromasa);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("YoshifumiKondō");
document.getElementById("YoshifumiKondō").addEventListener("click", function desplegarDirector() {
    let directorYoshi = document.getElementById("YoshifumiKondō").innerHTML;
    cardsPorDirector(directorYoshi);
    document.getElementById("menuCategorias").style.display ="none";
} );
//uno crear una variabl inicializada con un string vacio
//crer otra varible que me reeciba el .map sobre data.filter en el cual vamos a añadir el string del html de las cards
//ese html de las card lo vamos a agregar en el innerhtml de la seccionOne.


let mostrarTodas = () => {
    let stringHtml2 = "";
    let dataCards = data.films.map(item => {
        console.log(item.director, item.title, item.rt_score, item.poster)
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
    sectionOne.innerHTML = stringHtml2;
};


mostrarTodas();

document.getElementById("mostrarTodas").addEventListener("click", function desplegarDirector() {
    mostrarTodas();  
} );
//crear el boton y funcion de ordenar de la a la z y que se oculte
//otra funcoin q cuand le de clic le ponga el cuadro amarillo, dislay none y q traiga el contenido de HTML;
//abrir elgir uno e abra y se cierre ;

//desplegar menu ordenar

document.getElementById("btnOrdenar").addEventListener("click", function desplegarOrdenar() {
   document.getElementById("menuDesplegableOrdenar").style.display ="flex";
} );

//desplegar AZ
document.getElementById("ordenarAscendente").addEventListener("click", function menuDesplegableOrdenar(){
    let ordenAscendenteBtn = document.getElementById("ordenarAscendente").innerHTML;
    console.log(ordenAscendenteBtn);
    tipoOrden(ordenAscendenteBtn);
    document.getElementById("menuDesplegableOrdenar").style.display ="none";
} );


//desplegar ZA

document.getElementById("OrdenarDescendente").addEventListener("click", function menuDesplegableOrdenar(){
    let ordenDescendenteBtn = document.getElementById("OrdenarDescendente").innerHTML;
    console.log(ordenDescendenteBtn);
    tipoOrden(ordenDescendenteBtn);
    document.getElementById("menuDesplegableOrdenar").style.display ="none";
} );

//desplegar menu Ranking

document.getElementById("botonRanking").addEventListener("click", function menuDesplegarRanking(){
  document.getElementById("menuDesplegableRanking").style.display ="flex";
});

//desplegar Cielo

document.getElementById("rankingCielo").addEventListener("click", function menuDesplegarCielo(){
  let rankingCieloUno = document.getElementById("rankingCielo").innerHTML;
  console.log(rankingCieloUno);
  tipoRanking(rankingCieloUno);
  document.getElementById("menuDesplegableRanking").style.display ="none";
} );

//desplegar Tierra

document.getElementById("rankingTierra").addEventListener("click", function menuDesplegarTierra(){
  let rankingTierra = document.getElementById("rankingTierra").innerHTML;
  console.log(rankingTierra);
  tipoRanking(rankingTierra);
  document.getElementById("menuDesplegableRanking").style.display ="none";
} );




/*document.getElementById("btnOrdenar").addEventListener("click", function desplegarOrdenar() {

let OrdenarAz = document.getElementById("ordenarAscendente").innerHTML;
    OrdenarAz();


document.getElementById("menuDesplegableOrdenar").style.display ="none";*/

//Pasos para crear la funcion ordenar 
//2.Crear una funcion que al pasarle yo el string que va a decir lo q le pidamos en la pagina web
//a la funcion ordenarla o aplicarle el reverse

[
    "Whisper of the Heart",
    "When Marnie Was There",
    "The Wind Rises",
    "The Tale of the Princess Kaguya",
    "The Secret World of Arrietty",
    "The Cat Returns",
    "Tales from Earthsea",
    "Spirited Away",
    "Princess Mononoke",
    "Porco Rosso",
    "Ponyo on the Cliff by the Sea",
    "Pom Poko",
    "Only Yesterday",
    "My Neighbors the Yamadas",
    "My Neighbor Totoro",
    "Kiki's Delivery Service",
    "Howl's Moving Castle",
    "Grave of the Fireflies",
    "From Up on Poppy Hill",
    "Castle in the Sky"
]
//returnArray es una función que representa el arrglo en donde tenemos dos condiciones dependiendo de lo que queremos q haga
let tipoOrden = (tipoDeOrdenamiento) => {
    let tipoOrden = tipoDeOrdenamiento;
    let returnArray = () => {
        console.log(tipoOrden);
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
    console.log(returnArray());
    let stringSortHtml = "";
    let matchSortAz = returnArray().map(title => {
        console.log(title);

        let filmTitle = title;

        let filterTitle = data.films.filter(data => {
            if (data.title === filmTitle){
            console.log(data.title);
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

    sectionOne.innerHTML = stringSortHtml;
    console.log(sectionOne);

};

console.log(tipoOrden("Ascendente A-Z"));
console.log(tipoOrden("Descendente Z-A"));

let tipoRanking = (tipoRanking) => {
    let tipoDeRanking = tipoRanking;
 //En esta funcion vamos a crear dos arrays uno va a contener las peliculas de cielo 
 //el otro las peliculas de tierra y se retornaria el array con las peliculas tierra 
    let returnRankingArray = () => {
        if (tipoDeRanking === "Cielo"){
            let arrayCielo = data.films.filter(film => Number(film.rt_score) >= 90);
            console.log(arrayCielo);
            return arrayCielo;
        } 
        else {
            let arrayTierra = data.films.filter(film => Number(film.rt_score)  < 90); 
            return arrayTierra;
        }
    
    };

    console.log(returnRankingArray());
    console.log(tipoRanking);
    let stringHtmlRanking = "";
    let matchRanking = returnRankingArray().map(film => {
        console.log(film);
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

    sectionOne.innerHTML = stringHtmlRanking;
    console.log(sectionOne);
};
