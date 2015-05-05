// Exercise 3

// Make a `Radio` constructor that takes in an `ownerName` and 
// a `signalType` ("AM" or "FM"). 
var Radio = function(ownerName, signalType) {
  this.ownerName = ownerName;
  this.signalType = signalType;
}

// Add a `setStation` method to your radio that allows the following
// ranges for a `station` property:
//    * `535` to `1705` for "AM".
//    * `88` to `108` for "FM".
Radio.prototype.station = null;
Radio.prototype.setStation = function(stationNum) {
  if (this.signalType === "AM" && stationNum >= 535 && stationNum <= 1705) ||
  (this.signalType === "FM"  && stationNum >= 88 && stationNum <= 108) {
    this.station = stationNum;
  } else {
    console.log("Can't find station " + stationNum + this.signalType + ". Out of range.");
  }
}

// Add a `listen` method that returns the following:
//    * `"distorted music"` for "AM".
//    * `"clear music"` for "FM".
Radio.prototype.listen = function() {
  if (this.signalType === "AM") {
    return "distorted music";
  } else if (this.signalType === "FM") {
    return "clear music";
  }
}


// SUPER BONUS: Add a `toggleSignal` method that lets you set 
// `signalType` to `AM` or `FM`. 
// Make sure the `station` is valid when you toggle. 
// Your radio should remember the `station` from the other 
// signal type when you toggle.
Radio.prototype.lastAMStation = null;
Radio.prototype.lastFMStation = null;

Radio.prototype.toggleSignal = function(newSignalType){
  if (this.signalType === "AM" && newSignalType === "FM") {
    // record the AM station we start on as the last AM station
    this.lastAMStation = this.station;
    // set the new station the last FM station if there is one,
    // or a default FM station of 88.1 (because NPR is awesome)
    this.station = (this.lastFMStation ? this.lastFMStation : 88.1);
    // record the station we're on now as our new last FM station
    this.lastFMStation = this.station;
    // switch signal type
    this.signalType = newSignalType;
  } else if (this.signalType === "FM" && newSignalType === "AM") {
    this.lastFMStation = this.station;
    this.station = (this.lastAMStation ? this.lastAMStation : 535);
    this.lastAMStation = this.station;
    this.signalType = newSignalType;
  } 
}
 