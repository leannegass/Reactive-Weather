import React, {useState} from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form';

function App() {
    const [location, setLocation] = useState('')
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>

            {/* create form element for input from users*/}
            <Form location={location} setLocation={setLocation}/>
            
            <Location  data={cities} location={location} setLocation={setLocation}/> 
            <div className = "app">
            
                
            
                {cities.map((city,i) => <WeatherCard key={i} data={city}/>)}
            </div>
            
            
            
        </>
    )
}

export default App;