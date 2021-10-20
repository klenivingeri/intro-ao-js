function Perfil(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age
} 
let perfil = new Perfil('Erick','Kleniving', 29)

console.log(perfil.age)

Perfil.prototype.printCompletName = function() {
  return console.log(`${this.name} ${this.lastName}`)
}
perfil.printCompletName()
