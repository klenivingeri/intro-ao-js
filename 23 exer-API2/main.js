
fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(response => saveLocalStorage(response.data))
    .catch(error => console.log('Api não localizada'));

const saveLocalStorage = (heros)=>{
  Object.keys(heros).forEach(item =>{
    
    var div = document.createElement('div');
        div.setAttribute('class', 'champion');
        div.setAttribute("style", `background-image: url(img/${heros[item].id}.jpg)`);
        div.innerHTML =  `<div class="name"><h3>${heros[item].name}</h3></div>`
      document.getElementById('galery').appendChild(div);
      
    });
  }




/*
                          <p>AD: ${heros[item].info['attack']} | 
                          DF: ${heros[item].info['defense']} | 
                          MG: ${heros[item].info['magic']} | 
                          DF: ${heros[item].info['difficulty']}</p>

const leagueoflegends =  JSON.parse(localStorage.getItem('@leagueoflegends'))
if(!leagueoflegends){
  fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(data => saveLocalStorage(data))
    .catch(error => console.log('Api não localizada'));

  const saveLocalStorage = (heros)=>{
  console.log('estava vazio')
  localStorage.setItem('@leagueoflegends', JSON.stringify(heros.data))
  }
}

Object.keys(leagueoflegends).forEach(function(item){
  var div = document.createElement('div');
      div.setAttribute('class', 'digimon');
      div.innerHTML =  `<p>${leagueoflegends[item].name}</p>
                        <p>AD: ${leagueoflegends[item].info['attack']}</p>
                        <p>DF: ${leagueoflegends[item].info['defense']}</p>
                        <p>MG: ${leagueoflegends[item].info['magic']}</p>
                        <p>DF: ${leagueoflegends[item].info['difficulty']}</p>`
      document.body.appendChild(div);

});
 


*/

 





































/*
var digimon = new XMLHttpRequest();
digimon.onreadystatechange = function() {
       console.log(digimon.responseText)
};
digimon.open("GET", "https://digimon-api.vercel.app/api/digimon", true);
digimon.send();

*/