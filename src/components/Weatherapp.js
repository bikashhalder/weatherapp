import React from  "react";
import "./css/style.css"
import { useState, useEffect } from "react";

const Weatherapp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("mumbai")

    useEffect(() => {
        // fetching api
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cf43e403516a6271967567c3faa201d9`
            const response = await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main); 
        }
        fetchApi();   
    },[search])
    return (
        <>
          <div className='box'>
                <div className="Inputdata">
                <input type="search" className="inputField" value={search}
                onChange={
                        (event) => {
                            setSearch(event.target.value)
                        }
                }/>
          </div>
        
          {!city ? (
              <p>No data found</p>
          ): (
              <div>
            <div className='info'>
            <h2 className="location">{search}</h2>
            
            <h1 className="temp"> {city.temp}°C </h1>
            <h3 className="temp_max_min">min temp : {city.temp_min} °C | max temp : {city.temp_max} °C</h3>
            <h3 className="humidity">humidity : {city.humidity}</h3>
            </div>
            <div className="animation1"></div>
            <div className="animation2"></div>
            <div className="animation3"></div>
        </div>
          )}
          </div>
        </>
    )
}

export default Weatherapp;