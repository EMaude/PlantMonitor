const express = require('express');
const app = express();

const led = require("led.js");



var port = 4040;
var address, os = require('os') ,ifaces = os.networkInterfaces();

// Iterate over interfaces ...
for (var dev in ifaces) {

    // ... and find the one that matches the criteria
    var iface = ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });

    if(iface.length > 0) address = iface[0].address;
}


app.get('/', (req,res)=>{
    res.send("API: /temp, /humidity, /soilMoisture");
});

app.get('/temp', (req,res)=>{
    res.send("Temp: WIP");
});

app.get('/humidity', (req,res)=>{
    res.send("Humidity: WIP");
});

app.get('/soilMoisture', (req,res)=>{
    res.send("Soil Moisture: WIP");
});

let server = app.listen(port, ()=>{
    led.start();
    console.log(`Server running at http://${address}:${port}/`);
})



/* TODO: Log data at set intervals and add routes to display logged data
        Existing Routes should pull from logged data
*/


