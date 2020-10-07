var sensor = require("node-dht-sensor");
var readInterval;

var pin = 17
var sensorType = 11 // as per API docs


//read sensor and return value to caller
module.exports.read = function () {
     return sensor.read(sensorType, pin);
}