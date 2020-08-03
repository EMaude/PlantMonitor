var tempHumidity = require("./tempHumidity");
var readInterval;

module.exports.start = function(){
    readInterval = setInterval(getTempHumidity, 1000);
}

function getTempHumidity(){
    const [temp, humidity] = tempHumidity.read();
    console.log(temp, humidity);
}