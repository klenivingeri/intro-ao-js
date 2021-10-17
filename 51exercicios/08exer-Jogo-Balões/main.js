// 1 Criar balão
// 2 Estourar balão
// 3 Carregar o jogo

var total = 0
function criarBalao(){

    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 95);
    var y = Math.floor(Math.random() * 95);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    balao.setAttribute("style", "left:"+x+"%; top:"+ y+"%; background-color:rgb("+r+","+g+","+b+");");
    balao.setAttribute("onclick","estourar(this)");
    
    document.body.appendChild(balao);

}


function estourar(objeto){
    document.body.removeChild(objeto);

    total++;

    var score = document.getElementById("total")
    score.innerHTML= ("Balões estourado:" + total);

}

function carregarJogo(){
    setInterval(criarBalao, 1000)
}