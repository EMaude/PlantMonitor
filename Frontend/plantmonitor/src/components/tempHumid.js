import React from 'react'

const tempHumid = ({ tempHumidData }) => {
    return (
        <div>
            <center>
                <h1>Temp and Humidity Data</h1>
                {tempHumidData.map((data) => (
                    <div class="card">
                        <h5 class="card-title">{data.id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{data.temperature}</h6>
                        <p class="card-subtitle mb-2 text-muted">{data.humidity}</p>
                        <p class="card-text">{data.currentdate}</p>
                        <p class="card-text">{data.currentime}</p>
                    </div>
                ))}
            </center>
        </div>
    )
};

export default tempHumid