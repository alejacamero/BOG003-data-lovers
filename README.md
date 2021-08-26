# Data Lovers

# SANTUARIO GHILBI

### Realizado por Alejandra Camero



## Preambulo - Studio Ghibli

Es uno de los mejores estudios de animación de todos los tiempos, fundado en 1985  por el legendario Hayao Miyazaki y Isao Takahata a día de hoy, han realizado más de 20 películas, además de otras clases de trabajos como por ejemplo cortometrajes y anuncios publicitarios entre otros

##  Resumen del proyecto

Santuario Ghilbi es una interfaz creada para los conocedores y amantes  de STUDIO GHILBI en donde le brindamos  la posibilidad de encontrar informacíon maravillosa y util, el  diseño acorde con la paleta de color que manejan en el Studio y algunos de los personajes caracteristicos como recursos visuales


![](https://i.imgur.com/t1rAEwF.png)

![](https://i.imgur.com/w1wKlZ1.png)
  
![](https://i.imgur.com/iWViz0y.png)


![](https://i.imgur.com/5WiRjHa.png) 

* En esta pagina web podran encontrar los  directores y las peliculas que dirigio cada uno de ellos con su respectivo poster y ranking.
* Los usuaios podran filtrar las peliculas por su director, ordenarlas en forma ascendente y descendente y finalmente obtener el ranking   clasificado en cielo / Tierra, donde destacaran las mejores peliculas

* El diseño  responsive  (creada desde  un diseño Mobile First)  para ser utilizada en diferentes dispositivos (celular, tablet y PC)

##  Investigación  Historias de Usuario

Se realizo una entrevista a 5 personas que han visto, les gusta o conocen de Studio Ghibli teniendo en cuenta estos aspectos

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

Con ellas se pudo evidenciar 

1. La importancia de utilizar una paleta de colores que identifique a Studio Ghibli
2. Utilizar un personaje principal en las tarjetas Modal diferente a Totoro para darle relevancia a otros personajes
3. Utilizar una imagen fan Art de los personajes
4. Se debe filtrar por director ya que como seguidor de Studio Ghibli casi siempre se escucha solo un nombre famoso y conocido y del resto muy  poco
5. los directores no se conoce mucho
6. Les interesa que se puedan ordenar las películas de la A a la Z es decir orden Ascendente y Descendente
7. Que sea amigable o interactiva para eso usamos una tarjeta modal
8. Que los nombre de los directores tenga un link donde los envié a una pagina que hable de cada uno de ellos
9. Que el ranking sea divertido y entretenido para esto creamos dos categorías Cielo e Infierno con valores con los que el usuario puede evidenciar las mejor rankeadas
10. Las tarjetas con los poster de las películas visualmente se puedan detallar y ver su director, nombre y ranking



##  Historias de usuario

Se realizaron 5 historias de usuario inicialmente, 4 de las 5 estan activas, terminadas y ejecutadas en la interfaz

### Historia de usuario 1: Modal de ingreso

ROL: Usuario o Seguidor de estudio Ghibli
OBJETIVO: Conocer el contenido de la pagina
MOTIVACIÓN: Tener un acercamiento claro de lo que hace la pagina

Descripción:
Yo como Usuario o Seguidor de estudio Ghibli quiero un mensaje de bienvenida donde me indican de que se trata la página para tener la certeza sobre la aplicación y mi interés sobre ella

Criterio de aceptación:

    El usuario recibe un mensaje de bienvenida donde se le indica de que se trata la pagina
    Página Web con un estilo en video juego con los colores característicos a Studio Ghibli por medio de una tarjeta Modal
    Un hipervínculo en el header, en el logotipo de la pagina
    En el cuerpo de la página una tarjeta modal con un mensaje de bienvenida y 4.Una imagen de uno de los personajes característicos del Studio Ghibli
    Un Footer donde encontrará las redes sociales

Definición de terminado

    El código cumple con el HTML semántico
    EL diseño se debe implementar usando selectores CSS
    El código tiene y pasa los test necesarios
    El producto debe ser responsive
    El código estará desplegado en gibhub


### Historia de usuario 2: filtro por Director

ROL: Usuario o Seguidor de estudio Ghibli
OBJETIVO: Poder realizar un filtro o búsqueda para encontrar los diferentes directores de las películas
MOTIVACIÓN: Poder ubicar las películas por su director y conocer cuál fue el encargado de darle magia a cada una de ellas

Descripción:
Como usuario o seguidor de estudio Ghibli quiero poder aplicar un filtro de búsqueda por director para que pueda ver todas las películas que realizaron y así tener claro quien dirigió cada una de ellas

Criterios de aceptación

    El usuario encontrará un filtro donde podrá buscar y escoger entre los 6 directores el que más le interese o le llame la atención
    Al dar clic en el botón de la categoría seleccionada el Usuario o Seguidor de estudio Ghibli desplegara una tarjeta o poster de las películas   realizada por su director
    En total 20 poster de las películas que se mostraran en un grupo de a 10 indicando el nombre y fecha de realización
    Para ver los otros10 poster de películas encontrara un botón que al darle clic las mostrara
    la versión Mobile podrá ver dos posters por fila y 5 columnas para completar las 10 películas
    El poster de cada película tendrá una medida de width y height e incluirá el nombre de la película y el año de realización

Definición de terminado
    El código cumple con el HTML semántico
    EL diseño se debe implementar usando selectores CSS
    Manejo de arrays/arreglos y bucles (for, for while)
    Manejo de objetos -Manejo del dom (Selectores, eventos)
    El código tiene y pasa los test necesarios
    El producto debe ser responsive.
    Encontrará un select con los nombres de los directores y al seleccionar mostrará las películas de dicho director



### Historia de usuario 3: Ordenar películas de la A - Z / Z – A

ROL: Usuario o Seguidor de estudio Ghibli
OBJETIVO: Poder realizar una búsqueda ordenada donde se vean las películas organizadas alfabéticamente
MOTIVACIÓN: Poder visualizar las películas en orden de la A la Z Y de la Z a la A alfabéticamente

Descripción:
Como usuario o seguidor de estudio Ghibli quiero poder ver las películas en orden alfabético para poder encontrar la que más me guste por su nombre.

Criterios de aceptación

    El usuario podrá ordenar las películas de la A a la Z y de la Z a la A
    El total de películas que mostrara al desplegar el botón son 20. en dos grupo de 10 en total
    Se mostraran las películas por poster cada uno con una medida en width y height e incluirá el nombre de la película y el año de realización

Definición de terminado

    El código cumple con el HTML semántico
    EL diseño se debe implementar usando selectores CSS
    Para el renderizado de las tarjetas se debe implementar manipulación dinamica desde JavaScript
    El código tiene y pasa los test necesarios
    El producto debe ser responsive
    Usar flexbox
    Utilizar el metodo Sort para ordenar


### Historia de usuario 4: Modal Ranking

Tarjeta Modal

Yo como Usuario o Seguidor de estudio Ghibli quiero un mensaje donde reciba información del ranking para tener la claridad de lo que me indica dicho ranking

Criterio de aceptación

    El usuario recibe un mensaje donde aparece Jiji quien es unos de los personajes característicos del Studio Ghibli
    Tendrá un mensaje del ranking correspondiente y valores
    El ranking tiene dos Categorías Cielo / Tierra (Cielo rankiadas mayor a 90 puntos y por otro lado Tierra rankiadas con menos de 90 puntos)
    Tarjeta modal - Explicación del ranking
    Una imagen de uno de los personajes característicos del Studio Ghibli

Definición de terminado

    El código cumple con el HTML semántico
    EL diseño se debe implementar usando selectores CSS
    El código tiene y pasa los test necesarios para función filter
    El producto debe ser responsive
    El código estará desplegado en Github


### Historia de usuario 5: Calculo adicional - Películas- Ranking

ROL: Usuario o Seguidor de estudio Ghibli
OBJETIVO: Poder realizar un cálculo adicional en donde se pueda conocer el porcentaje de películas mejor rankeadas de Studio Ghibli
MOTIVACIÓN: Poder saber cuales son las mejores películas de Studio Ghibli

Descripción:
Como usuario o seguidor de Studio Ghibli quiero poder saber cual es el porcentaje de las mejores películas de Studio Ghibli para tener la certeza de cuales son las mas recomendadas.

Criterios de aceptación

    Encontrará una tarjeta modal donde indicara el rango de las películas
    El usuario visualizara cuales son las películas con mejor ranking en un menúdesplegable con dos opciones Cielo (ranking mayor a 90) y Tierra(ranking menor a 90)
    El total de películas que mostrara al desplegar el botón son 5 por opción
    La información sea clara
    Colores correspondiente a la temática de Studio Ghibli

Definición de terminado

    El código cumple con el HTML semántico
    EL diseño se debe implementar usando selectores CSS
    Se realizara un calculo para determinar el porcentaje de películas
    El código tiene y pasa los test necesarios
    El producto debe ser responsive

### Prototipo de alta fidelidad

Figma es la herramienta diseño visual utilizada para realizar el prototipo Mobile First de alta fidelidad en donde seguimos los fundamentos de visual design

![](https://i.imgur.com/zbkPGhZ.png)           ![](https://i.imgur.com/2Nrb0cy.png)  


![](https://i.imgur.com/ANKZMhO.png)           ![](https://i.imgur.com/NW9Rw2l.png)  


![](https://i.imgur.com/oP1y3NC.png)           ![](https://i.imgur.com/ar1Udo7.png)

## Diseño de la Interfaz de Usuario
 
 Responsive Desing

![](https://i.imgur.com/MuN0eE9.png)

![](https://i.imgur.com/y4pJYGg.png)


 ![](https://i.imgur.com/EKbuaZD.png)



## Test de usabilidad

Al mostrar la aplicación o interfaz a los usuarios solicitaron los siguientes cambios al prototipo inicial :

* Crear un botón que muestre todas las películas.
* El Color del header y el footer debe ser mas suave
* Usar un menú desplegable es visualmente mas armónico
* El menú no debe tener tanta transparencia por que no se ve clara la información
* Responsive en mobile debe mejorar en cuanto a el tamaño de las tarjetas y la presentación de las mismas

#### Se analizo y realizamos los cambios solicitados por los usuarios para mejorar su experiencia 
