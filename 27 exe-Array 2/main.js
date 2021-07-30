let obj = [{
     name:'Brasil',
     age: 6
},{
     name:'Argentina',
     age: 9
},{
     name:'Alemanhã',
     age: 8
},{
     name:'Japão',
     age: 5
},{
     name:'USA',
     age: 3
},{
     name:'Bélgica',
     age: 7
}]
function mapTest(){
    let newMap =  obj.map( regiao =>  {
          if(regiao.age ==  6){
          console.log(regiao.name)
         
          }
          return regiao
     })
     console.log(newMap)
     
}
function forReachTest(){
     obj.forEach( regiao =>  {
           if(regiao.age ==  6){
           console.log(regiao.name)
           regiao.name = "Rússia"
           }    
      })
 }
 function filterTest(){
     let newFilter = obj.filter( regiao =>  regiao.age > 5 )
     console.log(newFilter)
 }
 
mapTest()
forReachTest()
filterTest()





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
