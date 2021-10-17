const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item){
    return item * 5
})
console.log(novaLista)

//percorre a lista e retorna um novo array
const novaListaa = lista.map(function(item, index){
    let mult =  index * item
    console.log(`index ${index} x ${item} item :${mult} `)

    
    return mult
})

console.log(novaListaa)

//soma toda lista
const soma  = lista.reduce(function(total,proximo){

    return total + proximo
})

console.log(soma)

//encontra um item em lista
const find = lista.find(function(item){
    return item === 6
})

console.log(find)