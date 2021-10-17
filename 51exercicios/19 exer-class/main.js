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




const minhaList = new List()

document.getElementById('data').onclick = function(){
    minhaList.add("entrei")
}



const minhasTarefas = new ListaTarefas2()

document.getElementById('novo').onclick = function(){
    minhasTarefas.add("Testando extends");
}

minhasTarefas.meuNome()