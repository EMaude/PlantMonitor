var sensor = require("node-dht-sensor");
var readInterval;

module.exports.getTemp = function(){

}

module.exports.getHumidity = function(){

}

module.exports.start = function(){
    readInterval = setInterval(readAndLog, 250);
}


function readAndLog()
{
    sensor.read(11, 17, function(err, temperature, humidity) {
        if (!err) {
            console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
        }
        else
        {
            console.log("Error with temp/Humidity Sensor");
            clearInterval(readInterval);
        }
    });
}