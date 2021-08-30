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
let items = ['rosa','amarelo','verde', 'vermelho', 'azul']
function pesquisa(...palavra){

  for( let item of items){
    if([...palavra].indexOf(item) !== -1){
      console.log(item)
    }
  }

}

pesquisa('azul','verde')