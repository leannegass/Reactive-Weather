import React, {useState} from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard'

function App() {
    const [location, setLocation] = useState('Paris')
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map(city => <WeatherCard data={city}/>)}
            </div>
            {/* <div>
                <Location data={cities} location={location} setLocation={setLocation}/>
            </div> */}
            
            
        </>
    )
}

export default App;