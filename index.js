const express = require('express');
const app = express();
var Gpio = require('onoff').Gpio;

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
    console.log(`Server running at http://${address}:${port}/`);
})



/* TODO: Log data at set intervals and add routes to display logged data
        Existing Routes should pull from logged data
*/


//LED TEST CODE

var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds 