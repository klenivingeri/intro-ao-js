class Classroom{
  constructor(name, lesson){
    this._name = name;
    this._lesson = lesson;
  }

  getName(){
    return this._name
  }
  getLesson(){
    return this._lesson
  }
  setName(value){
    this._name  = value
  }
  setLesson(value){
    this._lesson = value;
  }

}