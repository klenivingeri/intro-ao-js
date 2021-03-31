class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }

}


class ListaTarefas{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }


}



class ListaTarefas2 extends ListaTarefas{
    constructor(){
        super();
        this.nome = "Kleniving";
    }
    meuNome(){
        console.log(this.nome)
    }


}



const minhasTarefas = new ListaTarefas2()
const minhaList = new List()






document.getElementById('novo').onclick = function(){
    minhasTarefas.add("Testando extends");
}

document.getElementById('data').onclick = function(){
    minhaList.add("entrei")
}


minhasTarefas.meuNome()