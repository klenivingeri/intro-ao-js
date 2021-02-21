var data =  new Date();

console.log(data);
//data.getHours();
//data.getMinutes();
//data.getSeconds();
//data.getMilliseconds();

var data2 = new Date(Date.parse("March 10,2018"));
console.log(data2);


//data2.getDate();
//data2.getDay();
//data2.getFullYear(); 
// 0 é domingo sabado é 6

var dias = ["Domingo", "Segunda", "Terça", "Quarta","Quinta","Sexta","Sabado"]

console.log(dias[data.getDay()])

//somar dias
data2.setDate(data.getDate() + 2)
console.log(data2) //já devolve com os dias somados

//somar horas
data.setHours(data.getHours() + 2)
console.log(data) //já devolve com os horas somados