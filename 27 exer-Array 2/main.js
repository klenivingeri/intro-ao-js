let obj = [{
     id:1,
     name:'Brasil',
     size: 6
},{
     id:2,
     name:'Argentina',
     size: 9
},{
     id:3,
     name:'Alemanhã',
     size: 8
},{
     id:4,
     name:'Japão',
     size: 5
},{
     id:5,
     name:'USA',
     size: 3
},{
     id:6,
     name:'Bélgica',
     size: 7
}]

function forTest(){
     for (i = 0; i < obj.length; i++) {
          console.log(obj[i]);
      }
}
function forReachTest(){ //ForEach Não tem retorno.
     obj.forEach((regiao, index, arr ) => {  
          let { name, size } = regiao;
          console.log(`${index} | Name: ${name}, Size: ${size}`);
     })
}

function mapTest(){ //Map retorna um novo array com as alterações.
     let newMap = obj.map((regiao, index, arr ) => { 
          if(index == 2){
               regiao.name = 'Porgutal';
               regiao.size = 8;
          }
          console.log(`${index} | Name: ${regiao.name}, Size: ${regiao.size}`)
          return regiao;
     }) 
     console.log(newMap)
}

 function filterTest(){ // Filter retorna para o array apenas os valures true.
     let newFilter = obj.filter( (regiao, index, arr ) => {
          if(regiao.size > 5){
               return true;
          }else{
               return false;
          }
     })
     console.log(newFilter)
}
function findTest(){ // Find retorna o primeiro valor true encontrado.
     let newFind = obj.find( (regiao, index, arr ) => {
          if(regiao.size > 5){
               return true;
          }
     })
     console.log(newFind)
}

function everyTest(){ // Every retonar boolean, se todos passarem na condição é true caso contraio false.
     let newEvery = obj.every( (regiao, index, arr ) => {
          if(regiao.size > 2){
               return true;
          }
     })
     console.log(newEvery)
}

function someTest(){ // Some retonar true se houver pelo menos um item no arr.
     let newSome = obj.some( (regiao, index, arr ) => {
          let { name, size } = regiao;
               return size == 9;
     })
     console.log(newSome)
}

function reduceTest(){ // Reduce acumula valores. precisa acrescendar um 0 depois da função.
     let newReduce = obj.reduce( (total, regiao, index, arr ) => {
          let { name, size } = regiao;
               return total + size;
     },0)
     console.log(newReduce)
}

//forTest();
//forReachTest();
//mapTest();
//filterTest();
//findTest();
//everyTest();
//someTest();
reduceTest();



/*

list = Array(10).fill(null) cria todos com null
list.slice copia o Array
list.indexOf() localiza e retorna posição  1.2...9
list.join(" / ") como voce quer juntar o array
list.pop()  remove o ultimo elemento do Array
list.shift() remove o primeiro elemento do Array
list.push add um elemento no final do Array
list.unshift() add um elemento no inicio do Array
list.concat(Array) concatena(junta) 2 Arrays
*/
