// import material ui 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");


    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("")
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