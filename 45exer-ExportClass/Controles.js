
class Ctrl{
  constructor(){
    this.nome = 'Erick'
  }
  btn(){
  console.log('123-456-789')
  }
}

class Perfil{
  constructor(){
    this.nome = 'Erick'
  }
  atividade(name){
  console.log(name)
  }
}



const controle = 10
export{ controle,  Perfil , Ctrl}

/**
 * Atenção para trabalhar com Modulos precisamos identificar isso no nosso html.
 * Passando para tag script o (type="module")
 * Pass
 *  <script type="module" src='main.js'></script>
 */