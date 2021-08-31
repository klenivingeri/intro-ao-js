console.log('--------------Exemplo 1')
let promise1 = new Promise((resolve, reject)=>{
  // corpo da promisse
})
promise1.then();
promise1.catch()

console.log('--------------Exemplo 2')
let promise2 = new Promise((resolve, reject)=>{
  let resultado  = true
  if(resultado == false){
    resolve('Promisse resolvida')
  }else{
    reject('Promisse não resolvida')
  }
})
promise2.then( data =>{
    console.log(data)
}).catch( data =>{
  console.log(data)
})
/**
console.log('--------------Exemplo 3')
let promise3 = new Promise((resolve, reject)=>{
  let resultado  = true
  let time = 2000
  setTimeout(()=>{
    if(resultado == true){
      resolve('Promisse resolvida')
    }else{
      reject('Promisse não resolvida')
    }
  },time)
}).then( data =>{ console.log(data); return data})
  .then( data =>{ console.log(data, '2º then')})
  .catch( data =>{ console.log(data)})
*/

console.log('--------------Exemplo 4')
let promise4 = new Promise((resolve, reject)=>{
 throw new Error('error!')
 resolve('ok')
}).then( data =>{ console.log('sucesso',data)})
  .catch( data =>{ console.log('falha', data)})
  

let promise5 = new Promise((resolve, reject) =>{
  resolve('ok1')
}).then( data=>{
  console.log(data);

  throw new Error('Deu ruim')
  return data;
}).then(data =>{
  console.log(data)
}).catch(data =>{
  console.log('Falho', data)
})