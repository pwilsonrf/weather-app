import _ from 'lodash'
import dotenv from "dotenv";
dotenv.config();

const searchLocation = `150,Van Ness Ave,San Francisco,CA,94102`;

console.log("hello")

fetchLocation(searchLocation, process.env.LOCATION_API)
fetchWeatherData(searchLocation, process.env.WEATHER_API)

async function fetchLocation(location, apiKey){
    try {
        const res = await fetch(`https://us1.locationiq.com/v1/search?key=${apiKey}&q=${location}&format=json`, {
            method: 'GET',
        });
        const locationData = await res.json();
        const [lat, lon] =  [locationData[0].lat, locationData[0].lon];
        console.log(lat,lon);
    } catch (err){
        console.log(err)
    }
}

async function fetchWeatherData (location, apiKey){
    try {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=14`, {
            method: 'GET',
        })
        const weatherData = await res.json();
        console.log(weatherData)
        console.log(weatherData.forecast)
    } catch (err){
        console.log(err)
    }
}


