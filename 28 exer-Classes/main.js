let $matter  = new Classroom('Aprendendo sobre Classes', 28)

let $h1 = document.querySelector(".h1")

$h1.innerHTML = $matter.getName()

let $obj = {
  $matter
}

console.log($obj)
console.log($obj.$matter)
console.log($obj.$matter._name)
