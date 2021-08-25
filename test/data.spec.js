import  cardsPorDirector  from '../src/data.js';

/* const filmsTest = [

  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "rt_score": "95",
    
  },

  {
   
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "rt_score": "93",
  },

  {
   
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "rt_score": "96",
  },
] */


describe('cardsPorDirector', () => {
  it('is a function', () => {
    expect(typeof cardsPorDirector).toBe('function');
  });

  const resultDirectorCard = ` 
    <div class="card">
      <div class="top-row background-top-row">
          <h4>Whisper of the Heart</h4>
      </div>
      <img  class= "posterPelicula" src="https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Whisper_of_the_Heart.jpg" alt="Imagen Whisper of the Heart">
      <div class="content">
          <h3>Yoshifumi Kondō</h3>
          <h3>Ranking 91</h3>
          <!-- <button class="button background-top-row">Empezar</button> -->
      </div>
    </div>
    `;

  it('This function returns an html string from the directors card passed to it as an argument', () => {
    expect(cardsPorDirector("Yoshifumi Kondō")).toEqual(resultDirectorCard);
  });

});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */


