var sensor = require("node-dht-sensor");
var readInterval;


module.exports.start = function(){
    readInterval = setInterval(readAndLog, 1000);
}

module.exports.read = function(){
    var temp = 0;
    var humid = 0;

    sensor.read(11, 17, function(err, temperature, humidity){
        temp = temperature;
        humid = humidity;
    });

    return [temp, humid]
}