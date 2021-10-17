
const hora =  new Date();
const mensagem = defineMensagem`${""}, são ${hora.getHours()} horas`;

function defineMensagem(strings, ...values){
//console.log(strings); console.log(values);
 let hora = values[1]

 if( hora >= 6 && hora <= 12){

  values[0] = "Bom dia ";

 }else if(hora >=12 && hora <= 18){

  values[0] = "Boa tarde ";

 }else{

  values[0] =  "Boa noite ";

 }
 return `${values[0]}${hora}${strings[2]}`;

}//defineMensagem

console.log(mensagem)

