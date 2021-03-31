

const pega  = (fruta)=>{
	console.log('minha fruta preferida é '+fruta);
}

pega('Laranja');



function adicionar(...numeros){
    let total  = numeros.reduce((total, proximo)=> total + proximo
)
    return total
}
console.log(adicionar(1,2,3,4,5,6))