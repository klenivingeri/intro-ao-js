function tecladoApertado(event){ //no mac e opera ele só executa 1 vez
    console.log("Você apertou o teclado" + event.keyCode)
    if(event.keyCode == 13){
        console.log("Você apertou Enter")
    }
}
function soltouteclado(event){
    console.log("Você soltou o teclado" + event.keyCode)
}


function segurouteclado(event){ // repete se a tecla ficar apertada
    console.log("Você Segurou o teclado" + event.keyCode)
}
// event.shiftKey
// event.keyCode
// event.ctrlKey