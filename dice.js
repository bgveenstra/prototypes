// Exercise 1

// Make a `Dice` constructor that takes a `numberOfSides`. 
function Dice(numberOfSides) {
  this.numSides = numberOfSides;
}

// Add a method called `roll` that randomly returns a number 
// from `1` up to the `numberOfSides`.
Dice.prototype.roll = function(numberOfSides){
  return Math.floor(Math.random()*this.numSides)+1;
}

// Modify your `roll` method to record the returned side 
// in a `lastRoll` property.
Dice.prototype.lastRoll = null;
Dice.prototype.roll = function(){
  var thisRoll = Math.floor(Math.random()*this.numSides)+1;
  this.lastRoll = thisRoll;
  return thisRoll;
}
