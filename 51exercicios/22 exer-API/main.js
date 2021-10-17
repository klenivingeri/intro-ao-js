fetch('https://digimon-api.vercel.app/api/digimon' )
  .then(response => response.json())
  .then(data => digimons(data))
  .catch(error => console.log('Api não localizada'));


const digimons = (pega)=>{
  pega.map(digimon => {
    
    var div = document.createElement('div');
      div.setAttribute('class', 'digimon');
      div.setAttribute('id', digimon.name);
      div.innerHTML =  `<p>${digimon.name}</p>`
    document.body.appendChild(div);

    var img = document.createElement('img');
      img.setAttribute('src', digimon.img);
      img.setAttribute('width', 125);
      img.setAttribute('height', 125);
    document.getElementById(digimon.name).appendChild(img);
    console.log(digimon)

    var p = document.createElement('p');
      p.setAttribute('class', 'level');
      p.innerHTML = digimon.level
      document.getElementById(digimon.name).appendChild(p);
  })
}


const digimons2 = (pega)=>{
  pega.map(digimon => {
    
    var div = document.createElement('div');
      div.setAttribute('class', 'digimon');
      div.setAttribute('id', digimon.name);
      div.innerHTML =  `<p>${digimon.name}</p>
                        <img src="${digimon.img}" width="125" height="125">
                        <p class="level">${digimon.level}</p>
                       `
    document.body.appendChild(div);

  })
}































/*
var digimon = new XMLHttpRequest();
digimon.onreadystatechange = function() {
       console.log(digimon.responseText)
};
digimon.open("GET", "https://digimon-api.vercel.app/api/digimon", true);
digimon.send();

*/