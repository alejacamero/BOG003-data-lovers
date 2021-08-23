

export function sortZA(productions) {
  return productions.sort((a, b) => (b.title > a.title ? 1 : -1));
}

export function filterDataOlder(productions) {
  let filterOlder = productions.filter(movie => {
    let filteredOld_movies = movie.release_date;

    if (filteredOld_movies < 2000) { /* si las fechas de lanzamiento son menores al 2000 entonces retornar un boolean que de ser true
                                      las peliculas cuyas fechas de lanzamiento cumplan la condición serán incluidas en el nuevo array */
      return true
    } else {
      return false
    }
  })
  return filterOlder

}

