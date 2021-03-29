



function main(){
     var text = document.getElementById('bemVindo')
     var entrada = prompt("Digite seu nome")


     text.innerHTML = 'Seja Bem vindo: ' + entrada
}


function mainArray(){
     var list = ["Erick", "Paul", "Andrade", "Kleniving"];
 
     var text = document.getElementById('bemVindo')
     
     text.innerHTML = 'join: ' + list.join(" - ")

   //text.innerHTML = 'value: ' + list[list.indexOf("Kleniving")]
   //text.innerHTML = 'position: ' + list.indexOf("Kleniving")
}




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
