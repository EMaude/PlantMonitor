var sensor = require("node-dht-sensor");
var readInterval;


module.exports.start = function(){
    readInterval = setInterval(readAndLog, 1000);
}

module.exports.read = function(){
    return sensor.read(11, 17, function(err, temperature, humidity){
        return [temp, humidity]
    });
}