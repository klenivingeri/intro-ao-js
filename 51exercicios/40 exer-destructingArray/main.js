class DestructingArray{
  constructor(){
    this.arr = ['Azul', 'Laranja', 'Rosa', ' Verde', 'Vermelho'];

    this.contatos = [
      { nome:'Alex Júnior', numero:'1234-5678' }, 
      { nome:'Carolina Moya', numero:'1234-6789' }, 
      { nome:'Fernando Jorge', numero:'1234-5567'}
    ]
  }
  showArr(a, b){
    console.log(`${this.arr[a]} ${this.arr[b]}`)
  } //showArr
  destructingArr(){
    const [,,cor1,,cor2] = this.arr // pula os index com as virgulas ','
    console.log(`${cor1} ${cor2}`)
  }//destructingArr
  destructingArrContact(){
    const [, carol] = this.contatos
    this.showNum(carol)
    this.showNumberFernando(this.contatos)
  } //destructingArrContact
  showNum({numero}){
    console.log(numero)
  }
  
  showNumberFernando([,,{numero}]){
    console.log(numero)
  }
}
console.log('Desestruturando Array part 1')
let destructingArray = new DestructingArray()

destructingArray.showArr(2,4)
destructingArray.destructingArr()
destructingArray.destructingArrContact()

//-------------------------------------------------------------
console.log('Desestruturando Array part 2')

const rotas = {
  rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
}

const { rapidas:[,,rapida] } = rotas
console.log(rapida)