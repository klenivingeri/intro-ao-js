function pedir(){

    x =  prompt("Oq Deseja pedir?")

    switch(x){
        case "0":
            alert(`O x vale ${x} ! :)`);
            break;
        case "1":
            alert(`O x vale ${x} ! :)`);
            break;
        case "2":
            alert(`O x vale ${x} ! :)`);
            break;
            default:
                alert(`Não temos a opção ${x}`);
    }
}





// while = Enquanto

x = 0 ;
while(x < 10){
    console.log(x)
    document.write("</br> O valor do X é " + x);
    x++;
}


// For =  para
// a recebe 0; rode novamente se o a for menor que 10 ; a++ toda vez que passsar aaqui vai ser adicionado 1 numero

for(a = 0; a < 10; a++){
    document.write("</br> a == "+ a)
}

