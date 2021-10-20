function trueOrFalse(val){
  return val ? console.log(true) : console.log(false)
}
trueOrFalse([]) // object é true
trueOrFalse({}) // object é true
trueOrFalse(new Boolean(false)) // object é true
trueOrFalse(new String('false')) // object é true
trueOrFalse('teste') // true
trueOrFalse(1) // true
trueOrFalse(-1) // true
var obj = {nome: 'Erick'}
trueOrFalse(obj) // true
trueOrFalse(obj.nome) // atributo existe é true

trueOrFalse()  // false
trueOrFalse(false) // false
trueOrFalse(null) // false
trueOrFalse(undefined) // false
trueOrFalse('') // false
trueOrFalse(0) // false
trueOrFalse(obj.idade) // atributo não existe é false