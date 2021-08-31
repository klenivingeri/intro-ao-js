console.log('---------------- Exemplo 1')
const primos  = [2,3,5];
const arroz = primos[Symbol.iterator]()

console.log(arroz.next())
console.log(arroz.next())
console.log(arroz.next())
console.log(arroz.next()) //undefined

console.log('---------------- Exemplo 2')
//Iterando parte do obj
const equipe = {
  quantidade: 3,
  maturitada: 'alta',
  senior: 'Luís',
  pleno: 'Márcia',
  junior: 'Christian',
  [Symbol.iterator] : function* (){
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}
for(let integrante of equipe){
  console.log(integrante)
}

console.log('---------------- Exemplo 3')
const timeNegocios = {
  quantidade: 2,
  diretor: 'Marcelo',
  vice: 'Guilherme',
  [Symbol.iterator]: function* (){
    yield this.diretor,
    yield this.vice
  }
}

const teams = {
  equipe,
  timeNegocios,
  [Symbol.iterator]: function* (){
    yield* this.equipe,
    yield* this.timeNegocios
  }
}

for(let team of teams){
  console.log(team)
}