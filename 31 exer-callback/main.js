function newBotton(text, callback){
  let $body = document.querySelector("body");
  let $button = document.createElement("button");
  $button.textContent = text
  callback($button, text);
  $button.style.fontSize = '40px';

  $body.insertAdjacentElement("beforeend", $button);
}

newBotton('Confirm', (button, text) =>{ // função de callback
  button.style.cssText = `
  background:green;
  color:white;
  `;

  button.addEventListener('click', ()=>{
    alert(`Você clicou em ${text}`)
 })
 
})
newBotton('Cancel',(button, text) =>{  // função de callback
  button.style.cssText = `
  background:red;
  color:white;
  `;
  button.addEventListener('click', ()=>{
    alert(`Você clicou em ${text}`)
 })

})