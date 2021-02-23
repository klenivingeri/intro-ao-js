class Pessoa{
    constructor(){
        this.nome ='';
        this.sobrenome ='';
    }

    nomePessoa(primeironome){
        this.nome = primeironome;
        console.log('Meu nome é: ', this.nome)

    }
    segundoNome(segundonome){
        this.sobrenome =  segundonome
        console.log('Meu Sobrenome é: ',this.sobrenome)
    }
    nomeCompleto(){
        let nomeCompleto = this.nome +' '+ this.sobrenome
        console.log(nomeCompleto)
    }
}


 let pessoas = new Pessoa()

 pessoas.nomePessoa("Erick")
 pessoas.segundoNome("Kleniving")

 pessoas.nomeCompleto()