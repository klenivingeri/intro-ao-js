const funcao = function(){
  console.log('Função executada')
}
const funcaoArrow = () => {
  console.log('Função Arrow executada')
}
funcao();
funcaoArrow();

//---------------------------------- This ---------------------------------------
const equipe = { 
  nome:'Guerreiros Z', 
  membros: ['Goku','Kuririn','Vegeta'],
  membrosDaEquipe: function() {  // this referencia o objeto equipe
    this.membros.forEach(function(membro) { 
      console.log(`${membro} é da equipe ${this.nome}`);  // Erro - Cannot read property'nome' of undefined
      // this referencia o conxtexto do objeto, mas nesse caso ele coresponde a forEach, e não existe nome definido dentro dele
    }); 
  }}

  //equipe.membrosDaEquipe();


  const equipe2 = { 
    nome:'Guerreiros Z', 
    membros: ['Goku','Kuririn','Vegeta'],
    membrosDaEquipe: function() {  // this referencia o objeto equipe
      let that = this //Passamos o this para uma variavel e usamos ele no contexto abaixo
      this.membros.forEach(function(membro) { 
        console.log(`${membro} é da equipe ${that.nome}`);  // Success 
      }); 
    }}
  
    equipe2.membrosDaEquipe();


// Arrow Function resolve os problemas também nesses casos
const equipe3 = { 
  nome:'Guerreiros Z', 
  membros: ['Goku','Kuririn','Vegeta'],
  membrosDaEquipe: function() { // this referencia o objeto equipe
    this.membros.forEach((membro) => {// arrow 
      console.log(`${membro} é da equipe ${this.nome}`); // Success -  utilizamos arrow pq não tira o this de contexto
      // a forna da execução do escopo é diferente.
    }); 
  }}

  equipe3.membrosDaEquipe();


  //---------------------------------- bind(this) ---------------------------------------

  const equipe = { 
    nome:'Guerreiros Z', 
    membros: ['Goku','Kuririn','Vegeta'], 
    membrosDaEquipe: function() { 
      this.membros.forEach(function(membro) { 
        console.log(`${membro} é da equipe ${this.nome}`); // Success
      }.bind(this)); // Passamos o bind para o escopo a baixo,
     }}
