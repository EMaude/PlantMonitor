const express = require('express');
const app = express();

const dataManager = require('./dataManager');
const led = require('./led');

var port = 4040;
var address, os = require('os'), ifaces = os.networkInterfaces();

// Iterate over interfaces ...
for (var dev in ifaces) {

    // ... and find the one that matches the criteria
    var iface = ifaces[dev].filter(function (details) {
        return details.family === 'IPv4' && details.internal === false;
    });

    if (iface.length > 0) address = iface[0].address;
}


app.get('/', (req, res) => {
    res.send("WIP");
});

app.get('/allTH', (req, res) =>{
    dataManager.getAllTHdata.then((data)=>{
        console.log(data);
        res.send(data);
    }).catch((err)=>{
        console.log("Error Getting Data");
    });
});


let server = app.listen(port, () => {
    //run init LED
    led.start();

    //start the data manager reading and logging sensor data
    dataManager.start();

    console.log(`Server running at http://${address}:${port}/`);
})

