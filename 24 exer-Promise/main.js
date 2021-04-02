
 function pega(suco){
   const fruta = new Promise((resolve,reject) =>{
      if(suco == 'laranja'){
        const resultado  = 'Eu quero suco de ' + suco
        resolve(resultado);
      }else{
        const resultado = 'Eu não gosto de suco de ' + suco
        reject(resultado)
      }
   })
return fruta;
 }


pega('laranja')
  .then(result => text = result)
  .catch(erro => console.log(erro))
