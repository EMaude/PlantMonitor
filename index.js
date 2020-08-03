const express = require('express');
const app = express();

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

app.listen(4040);



/* TODO: Log data at set intervals and add routes to display logged data
        Existing Routes should pull from logged data
*/