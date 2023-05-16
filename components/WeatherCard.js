import React from "react";
// import weatherIcon from "../utils"
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
import snowy from "../assets/Snowy.svg";


function WeatherCard({data:{city,temperature,forecast}}) {
  //console.log(typeof `${forecast}`)
  /**
   created an object with key: value pair to remove too many if statements
   */

  let weatherIcon = { "Sunny" : sunny,"Rainy" : rainy, "Partly cloudy" : partlyCloudy, "Cloudy" : cloudy, "Snowy" : snowy};
  
  
  return (
    <div className = "card">
        <div className = "img-container">
            {/*access the forecast and get value to pass onto src */}
            <img className="card-img-top" src = {weatherIcon[forecast]} alt="Card image cap" id = "icon"/>
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