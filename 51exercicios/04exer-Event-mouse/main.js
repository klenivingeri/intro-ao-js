// Apertou o mouse
function apertouMouse(){
    console.log("O mouse foi apertado! onmousedown")
}
// Mouse up
function solteiMouse(){
    console.log("Soltei o botão do mouse ! onmouseup")

}
// Mouse over
function passouMouse(){
    console.log("Você passou o em cima do botão! onmouseover")

}
// Mouse out
function tirouMouse(){
    console.log("Você esta mexendo o mouse! onmouseout")
}

function movendoMouse(){
    console.log("Você esta movendo o mouse ! onmousemove")
}

function onClick(){
    console.log("click")
}
// return faz com que não abra o menu do botão direito, tem que ter return no html tmb
function clickDireito(){
    console.log("Click com o botão Direito")
    return false;
}