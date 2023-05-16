import React, {useState} from 'react';
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";
import snowy from "../assets/Snowy.svg";

function weatherIcon(forecast){
    /**
       created an object with key: value pair to remove too many if statements
    */
    let weatherIcon = { "Sunny" : sunny,"Rainy" : rainy, "Partly cloudy" : partlyCloudy, "Cloudy" : cloudy, "Snowy" : snowy};
    return weatherIcon[forecast]
}
module.exports = weatherIcon;