import React, {useState} from 'react';
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
import snowy from "../assets/Snowy.svg";


function Location({data,location, setLocation}){
    let weatherIcon = { "Sunny" : sunny,"Rainy" : rainy, "Partly cloudy" : partlyCloudy, "Cloudy" : cloudy, "Snowy" : snowy};
    // console.log(data[0].city)
    // find() returning undefined so filtered array to find matching object
    const foundCity = data.filter(element => element.city === "Paris" )
    console.log(foundCity[0].city)

    return (
        <> 
           
           <div className = "card">
               <div className = "img-container">
                   <img className="card-img-top" src = {weatherIcon[foundCity[0].forecast]} alt="Card image cap" id = "icon"/>
                </div>
                <div class="card-body">
                    <h3 className="card-title">{foundCity[0].city}</h3>
                    <h5 className="card-text">{foundCity[0].temperature}</h5>
                    <h5 className="card-text">{foundCity[0].forecast}</h5>
                </div>
            </div>
            
        </>

    )

}

module.exports = Location;