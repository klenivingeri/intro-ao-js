function contaQuantidadeVogaisNaoAcentuadas(palavra){ 
  let qtdVogais = 0; 
  let pesquisa = 'aeiou'
  const letras = [... palavra];
  for(let letra of letras) {
    if(pesquisa.indexOf(letra) !== -1){ 
      qtdVogais++
    } 
  } 
 return qtdVogais;
}

console.log(contaQuantidadeVogaisNaoAcentuadas('Escrevendo uma frase'))

//-------------------------------------------------------------------
let items = "azul laranja vermelho rosa verde".split(' '); //cria um array divindo no "espaço entre as palavras"
function pesquisa(...palavra){

  for( let item of items){
    if([...palavra].indexOf(item) !== -1){
      console.log(item)
    }
  }

}

pesquisa('azul','verde')