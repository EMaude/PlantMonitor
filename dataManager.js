var tempHumidity = require("./tempHumidity");
var readInterval;


//set sensor read interval
module.exports.start = function(){
    readInterval = setInterval(getTempHumidity, 1000);
}


//gets the Temp and humidity from tempHumidity.js and logs the results
function getTempHumidity(){
    const result = tempHumidity.read();
    console.log(result.tempurature, result.humidity);
}