// import material ui 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");

    
    // API URL GeoCoding
    const API_URL_GEOCODING = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e1cb4dab7116a71d8cfb74732a05182e";




    let getWeatherInfo_GEOCODING = async()=>{
        let response = await fetch(`${API_URL_GEOCODING}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }




    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo_GEOCODING();
    }

    return(
        <>
            <div>
                <h3><u>Search For the Weather</u></h3>
                <form onSubmit={handleSubmit} action="">
                    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                    <br /><br />
                    <Button variant="contained" type='submit'>Search</Button>
                </form>

            </div>
        </>
    );
}