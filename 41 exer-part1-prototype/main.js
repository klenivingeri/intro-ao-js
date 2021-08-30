function Carro(modelo, chassi, qtdPortas){
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}
Carro.prototype.andar = function(){
  console.log('vrum vrum');
}

const prototipo = new Carro('protótipo','1233123124', 2)

prototipo.andar()

console.log(prototipo.modelo)
console.log(prototipo.chassi)
console.log(prototipo.qtdPortas)

//--------------  Extendendo obj carro ------------------
function Sonix(modelo, chassi, qtdPortas){
  Carro.call(this, modelo, chassi, qtdPortas)
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix

Sonix.prototype.abrirTetoSolar = function (){
  console.log('abrir teto solar')
}

const sonix = new Sonix('Sonix', '92i3048', 4)
console.log(sonix.modelo)
sonix.andar();
sonix.abrirTetoSolar();

/* vamos refatorar o exemplo acima para utilizar CLasses do Es6 no exer 42*/