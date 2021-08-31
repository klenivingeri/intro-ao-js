import comprimento from './circunferencia.js'; // Padrão 
import {area, PI } from './circunferencia.js'; // Nomeado
import * as pegandotudo  from './circunferencia.js'; // Pega tudo que é exportado

console.log(comprimento(3))
console.log(PI)
console.log(area(2))

console.log(pegandotudo.PI)

/**
 * Atenção para trabalhar com Modulos precisamos identificar isso no nosso html.
 * Passando para tag script o (type="module")
 * Pass
 *  <script type="module" src='main.js'></script>
 */