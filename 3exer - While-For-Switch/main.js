function pedir(){

    x =  prompt("Oq Deseja pedir?")

    switch(x){
        case "0":
            alert("O x vale 0 ! :) ")
            break;
        case "1":
            alert("O x vale 1 ! :) ")
            break;
        case "2":
            alert("O x vale 2 ! :) ")
            break;
            default:
                alert("Não temos essa opção")
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

