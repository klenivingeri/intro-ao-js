const propriedades = new WeakMap();

class VideoGame{
  constructor(name, controles, saida, midia){
    propriedades.set(this, {
      name,controles, saida, midia
    });
  }
  recuperarPropriedade(propriedade){
    return propriedades.get(this)[propriedade]
  }
}

const consolle = new VideoGame('Xbox', 4 , 'hdmi', 'dvd');
console.log(consolle.recuperarPropriedade('name'))