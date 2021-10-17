function cadastrar(usuarios, ...novosUsuarios){
    let resultado = [
        ...usuarios,
        ...novosUsuarios
    ]

    return resultado

}

let usuarios = ["Erick","Kleniving"]


let novosUsuarios = cadastrar(usuarios, "Hagurashi", "hagura" )

//console.log(novosUsuarios)

//------------------------------------------------------

function minhaLista(...nomes){
//console.log(nomes)
}

minhaLista(1, 2, 3, 4, 5, 6)


//------------------------------------------------------

let cars = [{car: 'Fusca', price: 3.009},{car: 'Brasilia', price: 2.999},{car: 'Uno', price: 4.999}]

function productSelect(...product){
    select = {
        car: product[0],
        price: product[1]
    }
 let newList = [...cars, select]
 console.log(newList)
 list(newList)
}

function list(list){
    for(let car of list){
        console.log(`Carro: ${car.car}, $ ${car.price}`)
    }
}

productSelect('celta', 5.009)
