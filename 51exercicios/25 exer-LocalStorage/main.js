const saveLocalStorag = ()=>{
               
  const nome = prompt('digite seu nome'); //1
  localStorage.setItem('@Armazine:Banco', nome); //2

}

const getLocalStorag = ()=>{

  const pega  = localStorage.getItem('@Armazine:Banco'); //3
  console.log(pega)

}

/*
 1 - Abre um campo com um input para inserir seu nome.
 2 - Cria um ID '@Armazine:Banco' e Armazena no Value a informação no navegador do usuario.
 3 - Recupera a informação do navegador do usuario.
*/
