import React, {useState} from 'react';
import weatherIcon from "../utils/weatherIcon";

function Location({data,location, setLocation}){
    // console.log(data[0].city)
    // find() to find matching object
    const foundCity = data.find((obj) => obj.city === location )
    // console.log(foundCity)
    if(foundCity===undefined){
        return "NOT A VALID CITY";
    }
    
    return (
        <> 
           
           <div className = "card">
               <div className = "img-container">
                {/* passing city forecast as parameter for weatherIcon*/}
                   <img className="card-img-top" src = {weatherIcon(foundCity.forecast)} alt="Card image cap" id = "icon"/>
                </div>
                <div class="card-body">
                    <h3 className="card-title">{foundCity.city}</h3>
                    <h5 className="card-text">{foundCity.temperature}</h5>
                    <h5 className="card-text">{foundCity.forecast}</h5>
                </div>
            </div>
            
        </>

    )

}

module.exports = Location;