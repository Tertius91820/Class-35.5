//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Streetfighter(name,age,specialMove,weapon){
  this.name = name
  this.age = age
  this.specialMove = specialMove
  this.weapon = weapon

  this.hiHit = function(){
    console.log(`${this.name} throws a punch!`);
  }
  this.kick = function(){
    console.log(`${this.name} kicks a low blow!`);
  }
  this.drawWeapon = function(){
    console.log(`${this.name} draws his ${this.weapon} and does his ${this.specialMove}!!!`);
  }
}
  let goku = new Streetfighter('Goku',200,'fireball','sword')