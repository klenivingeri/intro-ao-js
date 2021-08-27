class Controller {
   constructor(){
     this.getIdElement()
     this.showEl()
   }
   getIdElement(){
    this.el = {}
    document.querySelectorAll('[id]').forEach(element =>{
      this.el[this.camelCase(element.id)] = element
    })
   }

   camelCase(idElement){
     let div = document.createElement('div')
     div.innerHTML = `<div data-${idElement}="id"></div>`;
     return Object.keys(div.firstChild.dataset)[0]
   }

   showEl(){
     console.log(this.el.app)
     console.log(this.el.appLeftTop)
     console.log(this.el.appRightTop)
     console.log(this.el.appLeftButton)
     console.log(this.el.appRightButton)
   }
}

window.app = new Controller()