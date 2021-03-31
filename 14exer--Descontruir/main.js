// Descontruindo Objeto

console.log("Descontruindo Objeto")
const pessoa ={
    nome: "Erick",
    sobrenome: "Kleniving",
    idade: 28,
    cargo: "Desenvolvedor"
}

console.log(pessoa)

let { nome, idade } =  pessoa

console.log(nome)
console.log(idade)

let { cargo:desenvolvedor } = pessoa


console.log(desenvolvedor)

// Descontruindo Array

 let pessoas = ["Erick", "Kleniving", 28, "Desenvolvedor"]

 console.log("Descontruindo Array")

 let { 0:primeironome, 1:segundonome } = pessoas

 console.log(primeironome, segundonome)



 // Descontruindo Array 2º


 let cadastro = ["Erick", "Kleniving", 28, "Desenvolvedor"]


 let [ c_nome, c_sobrenome, c_idade ] = cadastro


 console.log(c_nome, c_sobrenome, c_idade)