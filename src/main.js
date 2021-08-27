
import cardsPorDirector, {mostrarTodas, tipoOrden, tipoRanking} from './data.js'

//variable principal en la que estamos metiendo todas las cards.
let sectionOne = document.getElementById("section1");

//funcion card peliculas
export const tarjeta = (pelicula) => {
    return  ` 
    <div class="card">
        <div class="top-row background-top-row">
            <h4>${pelicula.title}</h4>
        </div>
        <img  class= "posterPelicula" src="${pelicula.poster}" alt="Imagen ${pelicula.title}">
        <div class="content">
            <h3>${pelicula.director}</h3>
            <h3>Ranking ${pelicula.rt_score}</h3>
        <!-- <button class="button background-top-row">Empezar</button> -->
        </div>
    </div>`;
};

//Estamos llamando esta función para que nos traiga todas las cartas cuando abrimos la pagina web
sectionOne.innerHTML = mostrarTodas();
//Se inyectan las cartas cuando se da clic en el boton ver todas
document.getElementById("mostrarTodas").addEventListener("click", function desplegarDirector() {

    document.getElementById("menuDesplegableOrdenar").style.display ="none";
    document.getElementById("menuDesplegableRanking").style.display ="none";
    document.getElementById("menuCategorias").style.display ="none";
    document.getElementById("modalRanking").style.display ="none";

    sectionOne.innerHTML = mostrarTodas();
});

//Esta función nos desplega el menu de los directores completo
document.getElementById("aFiltro").addEventListener("click", function desplegarMenu() {
    document.getElementById("menuCategorias").style.display ="flex";
    document.getElementById("menuDesplegableOrdenar").style.display ="none";
    document.getElementById("menuDesplegableRanking").style.display ="none";
    document.getElementById("modalRanking").style.display ="none";
});


//categorias del Menu desplegable 

document.getElementById("HayaoMiyazaki").addEventListener("click", function desplegarDirector() {
    let directorHayao = document.getElementById("HayaoMiyazaki").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorHayao);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("IsaoTakahata");
document.getElementById("IsaoTakahata").addEventListener("click", function desplegarDirector() {
    let directorIsao = document.getElementById("IsaoTakahata").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorIsao);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("HiroyukiMorita");

document.getElementById("HiroyukiMorita").addEventListener("click", function desplegarDirector() {
    let directorHiroyu = document.getElementById("HiroyukiMorita").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorHiroyu);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("GorōMiyazaki");

document.getElementById("GorōMiyazaki").addEventListener("click", function desplegarDirector() {
    let directorGoro = document.getElementById("GorōMiyazaki").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorGoro);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("HiromasaYonebayashi");
document.getElementById("HiromasaYonebayashi").addEventListener("click", function desplegarDirector() {
    let directorHiromasa = document.getElementById("HiromasaYonebayashi").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorHiromasa);
    document.getElementById("menuCategorias").style.display ="none";
} );

//cardsPorDirector("YoshifumiKondō");
document.getElementById("YoshifumiKondō").addEventListener("click", function desplegarDirector() {
    let directorYoshi = document.getElementById("YoshifumiKondō").innerHTML;
    sectionOne.innerHTML = cardsPorDirector(directorYoshi);
    document.getElementById("menuCategorias").style.display ="none";
} );


//desplegar menu ordenar

document.getElementById("btnOrdenar").addEventListener("click", function desplegarOrdenar() {
   document.getElementById("menuDesplegableOrdenar").style.display ="flex";
   /*document.getElementById("menuDesplegableOrdenar").style.display ="none";*/
   document.getElementById("menuCategorias").style.display ="none";
   document.getElementById("menuDesplegableRanking").style.display ="none";
   document.getElementById("modalRanking").style.display ="none";

});

//desplegar AZ
document.getElementById("ordenarAscendente").addEventListener("click", function menuDesplegableOrdenar(){
    let ordenAscendenteBtn = document.getElementById("ordenarAscendente").innerHTML;
    sectionOne.innerHTML = tipoOrden(ordenAscendenteBtn);
    document.getElementById("menuDesplegableOrdenar").style.display ="none";
} );


//desplegar ZA

document.getElementById("OrdenarDescendente").addEventListener("click", function menuDesplegableOrdenar(){
    let ordenDescendenteBtn = document.getElementById("OrdenarDescendente").innerHTML;
    sectionOne.innerHTML = tipoOrden(ordenDescendenteBtn);
    document.getElementById("menuDesplegableOrdenar").style.display ="none";
} );



//ventana modal ranking informativa aarece al darle clic al menu desplegar ranking mostrardo el funcionamiento del mismo

// mostrar modal Ranking

document.getElementById("botonRanking").addEventListener("click", function mostrarVentanaModal(){
    document.getElementById("modalRanking").style.display ="flex";
});

//ocultar modal Ranking

document.getElementById("modalRanking").addEventListener("click", function ocultarVentanaModal(){
    document.getElementById("modalRanking").style.display ="none";
});


//desplegar menu Ranking

document.getElementById("botonRanking").addEventListener("click", function menuDesplegarRanking(){
  document.getElementById("menuDesplegableRanking").style.display ="flex";
  document.getElementById("menuDesplegableOrdenar").style.display ="none";
  document.getElementById("menuCategorias").style.display ="none";
});

//desplegar Cielo

document.getElementById("rankingCielo").addEventListener("click", function menuDesplegarCielo(){
  let rankingCieloUno = document.getElementById("rankingCielo").innerHTML;
  sectionOne.innerHTML = tipoRanking(rankingCieloUno);
  document.getElementById("menuDesplegableRanking").style.display ="none";
} );

//desplegar Tierra

document.getElementById("rankingTierra").addEventListener("click", function menuDesplegarTierra(){
  let rankingTierra = document.getElementById("rankingTierra").innerHTML;
  sectionOne.innerHTML = tipoRanking(rankingTierra);
  document.getElementById("menuDesplegableRanking").style.display ="none";
});
