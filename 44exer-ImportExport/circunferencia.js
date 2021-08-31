const PI =  3.14;

function comprimento(raio){
  return 2 * PI * raio
}

function area(raio){
  return PI * (raio * raio)
}
export default comprimento; // Padrão
export {area, PI};// Nomeado

/**
 * Atenção para trabalhar com Modulos precisamos identificar isso no nosso html.
 * Passando para tag script o (type="module")
 * Pass
 *  <script type="module" src='main.js'></script>
 */