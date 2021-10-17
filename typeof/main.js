function verifica(val){
  console.log(val,'é do tipo: ', typeof val)
}
function test(){}
class Classe{
  constructor(nome){
    this.nome = nome
  }
  Pega(){
    console.log(this.nome)
  }
}
const classe = new Classe('Erick')
verifica('abcdef') //string
verifica('47') //string
verifica(47) // number
verifica(true) // boolean 
verifica(null) //object
verifica(undefined) //undefined
verifica(test) // function
verifica(classe) // object
verifica([1,2,3,'4','5']) //object
verifica({nome:'Erick'}) //object


