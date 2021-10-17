
class Destructing{
  constructor(name, lastname, age){
    this.user = {
        name,
        lastname,
        age
    } 
  }

  show(){
    const {name, lastname, age } = this.user
    console.log(`Name: ${name} ${lastname} idade: ${age}`)
  }
  showLabel(){
    const {name:n, lastname:l, age:a } = this.user
    console.log(`Name: ${n} ${l} idade: ${a}`)
  }
  showObj({name, lastname, age},  test  = 0){
    console.log(`Name: ${name} ${lastname} idade: ${age} / ${test}`)
  }
}

let destructing = new Destructing('Erick','Kleniving', 29)

destructing.show()
destructing.showLabel()

let usuario = {
  name: 'Erick',
  lastname: 'Kleniving',
  age: 29
} 
destructing.showObj(usuario, 'testando')