/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox ({ updateInfo }) {

    let [ city, setCity ] = useState("");
    let [error, setError ] = useState(false);

    const API_URL =  "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "927a8597edff0bef2bc159d5c1ae9f3a";
    // const API_URL = import.meta.env.VITE_API_URL;
    // const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let results = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
           console.log(results);
            return results;
        } catch (err){
            throw console.error("No such place exist!");
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >

            <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} required/>

            <Button variant="contained" type='submit' >
            Search
            </Button>
            {error && <p style={{color: "red"}}>No such place found!</p>} 
            </form>
        </div>
    );
}