
/** MAP Aceita todo tipo de chave/valor.
  Mapas são estruturas de dados em que é possível associar umachave a um valor — 
  como em um dicionário, onde há umsignificado correspondente para cada palavra. 
  Cada uma das chavesé única e possui apenas um valor associado, mesmo que este 
  serepita em várias chaves.
 */
console.log('MAP ----------------------------')
var map = new Map();
var obj = {name: 'Erick', name: 'Kleniving'};
function funcao(){
  return console.log('Testando')
};
// Chave e valor
map.set("name", "Erick Kleniving");
map.set('funcao', funcao);
map.set('Objecto', obj);

console.log(map)
console.log(map.get('name'));
console.log(map.get('Objecto'))
map.get('funcao')()




