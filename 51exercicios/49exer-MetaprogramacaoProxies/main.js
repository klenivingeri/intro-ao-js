class Usuario {
  constructor(login, senha){
    this.login = login; 
    this.senha = senha;
  }
}
const usuario = new Usuario('SuperJS','123');
console.log(usuario.login);// SuperJS
console.log(usuario.senha);// 123

// exemplo1
const proxie = new Proxy(usuario, {
  get(alvo, propriedade){
    console.log(`${propriedade} foi solicitada!`)
    return alvo[propriedade]
  }
})

console.log(proxie.login)
console.log(proxie.senha)

// exemplo2
const validador = {
  set(alvo, propriedade, valor){
    if(propriedade == 'idade'){
      if(!Number.isInteger(valor)){
        throw new Error('A idade não é um número!')
      }
    }
    return alvo[propriedade] = valor
  }
}
const user = new Proxy({},validador);


console.log(user.idade = 29)

//exemplo3 

const {proxy, revoke} = Proxy.revocable({}, {});
proxy.test = 'haha'
console.log(proxy.test)

revoke() //remove a proxy
console.log(proxy.test)