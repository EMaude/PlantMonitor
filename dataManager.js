var tempHumidity = require("./tempHumidity");
var readInterval;

module.exports.start = function(){
    readInterval = setInterval(getTempHumidity, 1000);
}

function getTempHumidity(){
    var result = tempHumidity.read();
    console.log(result)
}