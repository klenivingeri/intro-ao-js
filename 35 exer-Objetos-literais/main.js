/**
 * Existe duas forma de criar objetos em js
 * Por funções construtoras ou por objetos literais
 */



class newObj{// class é uma função construtora
  constructor(){
    this.name = 'Erick1'
    this.lastName = 'Kleniving1 '
  }
   getName(){
      return console.log(`Meu nome é ${this.name} ${this.lastName}`);
  }
}

const estanciaObj = new newObj();

estanciaObj.getName();

//-------------------------------------------------------------------

let nome = 'Erick2'
let ultimoNome = 'Kleniving2'

const mostraName = function(){
  return console.log(`Meu nome é ${nome} ${ultimoNome}`);
 }
 
 const objLitera = { 
  nome,
  ultimoNome,
  mostraName
 }
 
 objLitera.mostraName();