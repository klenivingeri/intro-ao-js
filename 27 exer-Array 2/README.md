# Como é usado o loop no Javascript

Tarefas repetitivas na vida de um desenvolvedor é percorrer registros em uma lista.
E nessas horas de muitas repetições podem surgir muitos problemas dependendo o tamanho do código.

O Loop oferece um jeito fácil e rápido de executar uma ação repetidas vezes. Porém cuidado de como vai utiliza-lo, pois pode trazer uma complexibilidade bem ruim para o código.

Em muitos projetos me deparo com o loop for,  não é errado usar-lo, porém os outros métodos são mais legíveis no momento.

~~~Javascript
for (i = 0; i < obj.length; i++) {
console.log(obj[i]);
}
~~~

Esse código mostra todas as frutas sendo iteradas no console.log(), no meu ponto de vista não é uma forma amigável de se entender perto dos novos métodos que temos hoje.
Usando o forEach deixo o código mais legível, veja a baixo:

~~~Javascript
obj.forEach( pais => console.log(pais));
~~~