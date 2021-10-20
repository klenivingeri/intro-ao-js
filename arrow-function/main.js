const string = (r) => { 
  return r
}
const stringSimple = r => r

console.log(string('Erick'))
console.log(stringSimple('Paul'))
// ------------------------------------
const calc2 = (a, b, c) =>{
  if(a === undefined){
    a = 2
  }
  if(b === undefined){
    b = 3
  }
  if(c === undefined){
    c = 4
  }
  
  return [a,b,c]
}
console.log(calc2())

const calc1 = (a, b, c) =>{
  a == undefined ? a = 2 : a
  b == undefined ? b = 3 : b
  c == undefined ? c = 4 : c
  return [a,b,c]
}
console.log(calc1())

const calc = (a=2, b=3, c=4) => {
  return a + b + c
}
console.log(calc(2,3))






