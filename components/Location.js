import React, {useState} from 'react';
import {sunny,Rainy,PartlyCloudy,Cloudy} from "../assets/Sunny.svg";

function Location(data,location, setLocation){
    //const city = data.find(data.city => data.city === location )
    //console.log(city)

    return (
        <> 
           
           {/* <div className = "card">
           <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
           </div>
           <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}</h5>
            <h5 className="card-text">{city.forecast}</h5>
            </div>
            </div> */}
            
        </>

    )

}

module.exports = Location;