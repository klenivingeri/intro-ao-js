const Arraydenome = [] //1

const saveLocalStorag = ()=>{

  nome = prompt('digite seu nome'); //2
  Arraydenome.push(nome)//3
  localStorage.setItem('@Armazine:Banco', Arraydenome); //4
}

const getLocalStorag = ()=>{

  const getArraydenome  = localStorage.getItem('@Armazine:Banco').split(',') //5

  getArraydenome.map(nome => { //6
  	let p = document.createElement('p') //7
  	p.innerHTML = nome; //8
	document.getElementById('nome').appendChild(p); //9
  })
}

/*
 1 - Cria um array vazio
 2 - Abre um campo com um input para inserir seu nome.
 3 - Armazena a variavel na ultima posição do array.
 4 - Cria um ID '@Armazine:Banco' e Armazena no Value no navegador do usuario separnado por virgula.
 5 - Recupera a informação do navegador do usuario, e o split retonar um array separando por virgula cada valor.
 6 - Percorre todo Elemento getArraydenome retornando um paragrafo para cada valor.
 7 - Cria um elemento html do <p></p>.
 8 - innerHtml inseri o conteudo do elemento ficndo assim:  <p>Exemplo</p>.
 9 - Pega o elemento html com o id="nome" e inseri um filho <p></p> dentro dele
 9.1 - ficando assim <div id="nome"><p>Exemplo</p></div>.
 9.1.1 - Toda vez que passar ele vai acrecentar um elemento <p></p> a mais dentro da div pai
*/
