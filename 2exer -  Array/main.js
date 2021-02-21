
function main(){
     var list = ["Erick", "Paul", "Andrade", "Kleniving"]
 
     var text = document.getElementById('bemVindo')
     
     text.innerHTML = list.join(" - ")


     //text.innerHTML = 'Achei: ' + list[list.indexOf("Kleniving")]
   //  text.innerHTML = 'Achei: ' + list.indexOf("Kleniving")
}


function main1(){
     var text = document.getElementById('bemVindo')
     var entrada = prompt("Digite seu nome")


     text.innerHTML = 'Seja Bem vindo: ' + entrada
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
list.concat(Array) contatena(junta) 2 Arrays
*/