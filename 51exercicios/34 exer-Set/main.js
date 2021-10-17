/**
 * Obj set que trabalha com lista não aceita valor repetidos.
 * temos o method, add, delete, clear, has, size
 */

//Exemplo de como o set functiona
function fSet() { 
  let array = []; 
  this.add = function(valor) { 
    if(array.indexOf(valor) === -1) {
       array.push(valor); 
      } 
    }
  this.mostraValores = function(){
    console.log(array)
  }
}

var setf = new fSet();

setf.add(2);
setf.add(1);
setf.add(2);

setf.mostraValores();


//------------------Trsbalhando com Obj Set -----------------------------
const sete = 7
const set  =  new Set();
set.add(2);
set.add(1);
set.add(2); // não vai incluir, pois o valor é repetido
set.add(3);
set.add(sete);
//set.add(10);


for(let value of set) {
  
  if(value == 3){
    set.delete(value) // deleta 
    continue; // pedimos para fazer o proximo loop 
  }else if(value == 10){
    set.clear() // limpa  a lista
  }
  console.log(value)
}


if(set.has(sete)){ // has retorna boolean, verifica se o item esta na lista
  console.log(`O item ${sete} existe na lista`)
}else{
  console.log(`O item ${sete} não existe na lista`)
}

console.log(set)
console.log(set.size)





