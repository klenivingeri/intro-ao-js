# Aprendendo JavaScript
  Por padrão os navegadores conseguem ler a linguagem javaScript.
  Vamos aprender 3 formas de carrega-lo.
  
1 ) Podemos utilizar a tag `script` e escrever nosso codigo dentro dela.
~~~HTML
<html>
  <head>
    <script>
      console.log('Hello world')
    </script>
  </head>
  <body>
  </body>
</html>
~~~

2 ) Podemos fazer a tag `script` carregar um arquivo javaScript antes de carregar o `body` do nosso cocumento.
~~~HTML
<html>
  <head>
    <script src="main.js"></script>
    <!--
      Se for utilizado o atributo 'defer', ele aguarda o documento carregar antes de começar a ler nosso arquivo script
      <script src="main.js" defer></script>
    -->
  </head>
  <body>
  </body>
</html>
~~~
3 ) Agora é a forma mais utilizada na internet, onde o nosso arquivo é carregado no final do `body`.
<html>
  <head>
  </head>
  <body>
  ...
      <script src="main.js"></script>
  </body>
</html>