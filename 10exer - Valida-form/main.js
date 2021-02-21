function validar(){
    var valor =  document.getElementById("numero").value;
    var nomeValor =  document.getElementById("nome").value;
    if(valor.length > 2){
        alert("Digite um numero menor ou igual a 2 :" + valor);
        document.formulario.numero.focus();
        return false;
    }else if(nomeValor.length < 3){
        alert("Digite um nome maior!")
        document.formulario.nome.focus();
        return false;
    }else{
        alert("Formulario enviado com sucesso!")
        return true;
    }

}