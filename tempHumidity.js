var sensor = require("node-dht-sensor");


module.exports.getTemp = function(){

}

module.exports.getHumidity = function(){

}

module.exports.log = function(){
    sensor.read(11, 17, function(err, temperature, humidity) {
        if (!err) {
            console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
        }
    });
}