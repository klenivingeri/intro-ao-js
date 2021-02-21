/*
Abaixo de 17            Muito abaixo do peso
Entre     17 e 18,49    Abaixo do peso
Entre     18,5 e 24,99  Peso normal
Entre     25 e 29,99    Acima do peso

peso/(altura*altura);

*/

var peso;
var altura;
var imc;
var resultado;


function calcular(){
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc =  (peso/(altura*altura)).toFixed(2);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/>Cuidade você esta muito abaixo do peso!';
        return false

    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/>Você esta abaixo do peso!';
        return false

    }else if(imc > 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/>Você esta no peso correto!';
        return false

    }else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/>Você esta acima do peso!';
        return false
    }else if(imc > 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/>Você esta muito acima do peso!';
        return false
    }
    
    return false
}
