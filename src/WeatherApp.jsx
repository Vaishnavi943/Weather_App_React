import  SearchBox from './SearchBox.jsx';
import InfoBox from "./InfoBox.jsx";
import { useState } from 'react';

const WeatherApp = () => {

    let [ weatherInfo, setWeatherInfo ] = useState({
        city: "Jamshedpur",
        feelslike: 42.05,
        temp: 35.05,
        humidity:55,
        tempMax: 35.05,
        tempMin: 35.05,
        weather: "haze",
    });

    let updateInfo =  (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2><i>Weather App</i></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};

export default WeatherApp;