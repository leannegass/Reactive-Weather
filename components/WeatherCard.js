import React from "react";
import weatherIcon from "../utils/weatherIcon";


function WeatherCard({data:{city,temperature,forecast}}) {
  //console.log(typeof `${forecast}`)
  return (
    <div className = "card">
        <div className = "img-container">
            {/*access the forecast and get value to pass onto src */}
            <img className="card-img-top" src = {weatherIcon(forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;