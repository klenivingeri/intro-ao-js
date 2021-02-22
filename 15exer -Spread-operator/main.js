//Spread Operator Array
let primeiro = [1,2,3];

console.log(primeiro)

let segundo = [...primeiro,4,5,6];

console.log(segundo)

//Spread Operator Objeto

let pessoa ={
    nome: "Erick",
    idade: 28,
    cargo: "Programador"
}

let novaPessoa ={
    ...pessoa,
    sobrenome: "Kleniving",
    anoAtaul: 2050,
    cidade: "Campo Grande"
}


console.log(novaPessoa)



function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo:'Programador',
        status:1,
        codigo: '123456'
    }

    return novosDados

}

console.log(cadastroPessoa({nome: 'Erick', sobrenome: 'Kleniving', anoInicio: 2045}))
