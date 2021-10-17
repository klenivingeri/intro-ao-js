let oldArray = ['Aprendendo',' sobre', ' for', ' of']
let oldObj = {
    palavra1: 'Aprendendo',
    palavra2: ' sobre',
    palavra3: ' for',
    palavra4: ' in'
}
console.log('for-of')
// Criar um loop com os items dentro do array
for( var newArray of oldArray){
  console.log(newArray)// valor
}
console.log('for-in')
//criar um loop com os itens dentro do obj
for(var newObj in oldObj){
  console.log(newObj)// chave
  console.log(oldObj[newObj])// valor
}