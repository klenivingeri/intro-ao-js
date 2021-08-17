const car = new Car(1,2,3,4)




var win = 8000;
function createCar(color, callback){

let run = document.querySelector(".run")
let carEl = document.createElement('div')
carEl.classList.add('car')
carEl.style.background = color;
carEl.style.animationDuration = `${callback}ms`

run.insertAdjacentElement("beforeend", carEl);

winner(color, callback)

}

function speed(){
  
  let speedRun = Math.floor(Math.random() * 8000)
  if(speedRun <= 3000){
    speedRun = 4000
  }
  return speedRun
}

function winner(color,callback){
  if(win > callback){
    win = callback
    return console.log(win, color)
  }
}

createCar('green', speed())
createCar('red', speed())
createCar('yellow', speed())
createCar('blue', speed())



