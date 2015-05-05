// Exercise 2

// Make a `Starship` constructor that takes a `model` and `ownerName`. 
function Starship(model, ownerName){
  this.model = model;
  this.ownerName = ownerName;
} 
// Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` 
// method that let you change and read the `topSpeed`. 
// *Assume `topSpeed` is just a number.*
Starship.prototype.topSpeed = 9001; 
Starship.prototype.getTopSpeed = function(){ 
  return this.topSpeed; 
}
Starship.prototype.setTopSpeed = function(newTopSpeed) { 
  this.topSpeed = newTopSpeed; 
}
// Give your `Starship` an `accelerateTo` method that sets `currentSpeed` 
// to some number, unless that number is greater than its `topSpeed`.
Starship.prototype.currentSpeed = null;
Starship.prototype.accelerateTo = function(newSpeed) { 
  if (newSpeed <= this.topSpeed) {
    this.currentSpeed = newSpeed;
  } else {
    console.log("She can't take that kind of speed, Captain!");
  }
}