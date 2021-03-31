function cadastrar(usuarios, ...novosUsuarios){
    let resultado = [
        ...usuarios,
        ...novosUsuarios
    ]

    return resultado

}

let usuarios = ["Erick","Kleniving"]


let novosUsuarios = cadastrar(usuarios, "Hagurashi", "hagura" )

console.log(novosUsuarios)



function minhaLista(...nomes){
console.log(nomes)
}

minhaLista(1, 2, 3, 4, 5, 6)