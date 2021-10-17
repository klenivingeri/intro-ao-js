class Carro { 
  constructor(modelo, chassi, qtdPortas){ 
    this.modelo = modelo; 
    this.chassi = chassi; 
    this.qtdPortas = qtdPortas; 
  }
  andar(){
    console.log("vrum vrum")
  }
}

const basico = new Carro('Basico','34325234', 2)

console.log(basico.modelo)
console.log(basico.chassi)
console.log(basico.qtdPortas)
basico.andar()

class Sonix extends Carro{
  constructor(modelo, chassi, qtdPortas){
    super(modelo, chassi, qtdPortas);
  }

  abrirTetoSolar(){
    console.log('Abrir teto Solar')
  }
}

const sonix = new  Sonix('Sonix','34325234', 2)

sonix.abrirTetoSolar()
sonix.andar()
console.log(sonix.modelo)