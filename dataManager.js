
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sensordata', OPEN_READWRITE | OPEN_CREATE, (err) => {
    if (!err) {
        console.log("DB Connected");
    }
    else {
        console.log("DB Error: " + err.message);
    }
});

var tempHumidity = require("./tempHumidity");
var readInterval;




//set sensor read interval
module.exports.start = function () {
    readInterval = setInterval(getTempHumidity, 1000);
}


//gets the Temp and humidity from tempHumidity.js and logs the results
function getTempHumidity() {
    const result = tempHumidity.read();
    console.log(result.temperature, result.humidity);

    var stmt = db.prepare("INSERT INTO HTdata VALUES (?)"); //prepare db to accept values
    db.serialize(function(){
        stmt.run();
    });
    
}