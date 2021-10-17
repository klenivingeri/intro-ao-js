## O QUE SÃO FUNÇÕES GERADORAS

Funções geradoras são funções no JavaScript em que podemosinterromper e retornar sua execução várias vezes. Em termospráticos, isso significa que a execução do método é realizada até umponto e é interrompida até que invocada novamente. Quandoinvocada, continua sua execução a partir do ponto em que parou.

### *(asterisco)
O asterisco é usado para rotular uma função como geradora.Isso indica ao interpretador JavaScript que essa função pode ter suaexecução interrompida nos pontos definidos com a palavra
yield
.O asterisco pode ficar imediatamente depois da palavra reservada
 function
(como fizemos anteriormente), ou imediatamente antesdo nome da função. Ou seja, a função
percorrerLinha477
também poderia ser escrita assim:
~~~javascript
function *percorrerLinha477() { 
  console.log('Passei pela rua 1');
  yield 'Fim da linha';
  }

~~~
A palavra reservada yield, como foi dito, é utilizada paradefinir um ponto de parada da função. A princípio, isso significaque, ao invocar a função, o código será executado, passando pelo console.log e imprimindo a mensagem `"Passei pela rua 1"` no console, certo? Quase.
Ao invocarmos a função percorrerLinha477, temos umasurpresa, pois a mensagem `"Passei pela rua 1"`
não é exibida:
~~~javascript
function *percorrerLinha477(){ 
  console.log('Passei pela rua 1'); 
  yield 'Fim da linha';
}
percorrerLinha477();// {}
~~~

Mas por que a mensagem não foi exibida? O yield não defineum ponto de parada da função? Acontece que a mensagem não foiexibida porque, quando chamamos uma função geradora, seu corponão é executado imediatamente. Em vez disso, um objeto iterável éretornado. Esse objeto possui uma função muito útil chamada  `next`. 
Ao utilizar este método `next` dele, o corpo da funçãogeradora é executado até a primeira expressão `yield`, que define o valor que será devolvido no retorno da função.Resumindo, para que possamos ver a saída esperada, precisamoschamar a função geradora, e então invocar o método `next` no objeto retornado. 
Deste modo, o corpo do método é executado atéencontrar a palavra reservada  `yield`. Vejamos:
~~~javascript
const linha = percorrerLinha477();// {}
linha.next();// Passei pela rua 1
~~~
Para ver o valor definido pelo `yield`  retornado, vamos atribuiro valor de
`iteravel.next` em uma variável e imprimir seu valorno console:
~~~javascript
const linha = percorrerLinha477();// {}
const parada = linha.next();// Passei pela rua 1
console.log(parada);// { value: 'Fim da linha', done: false }
~~~