class Car{
  constructor(name, active, rating, description){
    this._name = name
    this._active = active;
    this._rating = rating;
    this._description = description;
  }

  getName(){
    return this._name
  }
  getActive(){
    return this._active
  }
  getRating(){
    return this._rating
  }
  getDescription(){
    return this._description
  }
  setName(value){
    this._name = value
  }
  setActive(value){
    this._active = value
  }
  setRating(value){
    this._rating = value
  }
  setDescription(value){
    this._description = value
  }

  save(){
    
  }

  update(){

  }

  delete(){

  }

}