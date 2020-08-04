
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/db.sqlite', "OPEN_READWRITE | OPEN_CREATE", (err) => {
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

    let sql = `INSERT INTO THdata (temperature, humidity, currentdate, currentime) values(${result.temperature}, ${result.humidity}, date('now'), time('now'))`
    db.run(sql, (result, err) => {
        if (err) {
            console.log("DB ERROR: " + err.message);
        }
    });
}