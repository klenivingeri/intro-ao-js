console.log('-----------Exemplo 1')
function* percorrerLinha477(){
  console.log('Passei pela rua 1');
  yield 'parada 1';
  console.log('Passei pela rua 2');
  yield 'parada 2';
  console.log('Passei pela rua 3');
  yield 'parada 3';
  console.log('Passei pela rua 4');
  yield 'parada 4';
}

let linha = percorrerLinha477()
let next = linha.next(); console.log(next.value);
next = linha.next(); console.log(next.value);
next = linha.next(); console.log(next.value);
next = linha.next(); console.log(next.value);


console.log('-----------Exemplo 2')
const linha2 =  percorrerLinha477();
let next2 = linha2.next();
while(!next2.done){
  console.log(next2.value);
  next2 = linha2.next()
}
console.log(next2.done)

console.log('-----------Exemplo 3')
const linha3 = percorrerLinha477()
for(let parada of linha3){
  console.log(parada)
}
