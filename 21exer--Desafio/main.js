class Produto{
    constructor(){
        this.produto = ['Computador','Telefone','Mouse','Teclado']
        this.numero = [1,3,5,7,0,9]
        
    }

    mostraProduto(){
        console.log(this.produto)
    }

    // Encontra e remove o Item do Array
    retiraProduto(prod){
        let novoProd = this.produto.filter(item => item !== prod)
        return console.log(novoProd)
    }
    // Encontra e retorna o Item encontrado
    encontreProduto(prod){
        let novoProd = this.produto.find(item => item == prod)
        return console.log(novoProd)
    }

    // (Encontra a posição no Array, e pega da posição em diante os valores setados) 
    removeSegundoItem(){
        let prod = this.produto.splice(1,1);
        return console.log(prod)
    }

    // Ordena o Array
    ordenaLista(){
        let num = this.numero.sort()
        return console.log(num)
    }

    // Retira primeiro Item do Array
    retiraPrimeiroItem(){
        return console.log(this.numero.shift())
     
    }

    // Inverte a Lista
    inverteLista(){
        let num = this.numero.reverse()
        return console.log(num)
    }

    // trabalha com o data
    trabalhaData(data){
        let setData = data.split('/')
        let [dia, mes, ano] = setData
        return console.log(dia + "/" + mes + "/" + ano)

    }



}

const p = new Produto()

p.mostraProduto()

p.retiraProduto("Mouse")

p.encontreProduto("Computador")

p.removeSegundoItem()

p.ordenaLista()

p.retiraPrimeiroItem()

p.inverteLista()

p.trabalhaData("17/08/1992")

