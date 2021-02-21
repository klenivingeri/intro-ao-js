// 1 Criar balão
// 2 Estourar balão
// 3 Carregar o jogo

var vertical = 50
var horizontal = 50
function esquerda(){
 horizontal = horizontal -3

    var quadrado = document.getElementById("quadrado");
    quadrado.setAttribute("style", "margin-top:"+ vertical +"px; margin-left:"+horizontal+ "px;");

}

function cima(){
 vertical= vertical-3

    var quadrado = document.getElementById("quadrado");
    quadrado.setAttribute("style", "margin-top:"+ vertical +"px; margin-left:"+horizontal+ "px;");

}
function baixo(){
 vertical= vertical+3

    var quadrado = document.getElementById("quadrado");
    quadrado.setAttribute("style", "margin-top:"+ vertical +"px; margin-left:"+horizontal+ "px;");

}
function direita(){
 horizontal= horizontal +3

    var quadrado = document.getElementById("quadrado");
    quadrado.setAttribute("style", "margin-top:"+ vertical +"px; margin-left:"+horizontal+ "px;");

}






