import React from 'react';
import './Result.css'


const Result = (props) => {

    const { err, city, data, sunrise, sunset, temp, pressure, wind, time } = props.weather

    let content = null;

    if (!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <>
                <h3>Wyszukiwanie pogody dla miasta: <em>{city}</em></h3>
                <h4>Aktualna data i godzina:  {data}</h4>
                <h4>Temperatura dla miasta: {temp} &#176;C</h4>
                <h4>Wschód słonca: {sunriseTime}</h4>
                <h4>Zachód słonca: {sunsetTime}</h4>
                <h4>Szybkosc Wiatru: {wind} m/s</h4>
                <h4>Ciśnienie dla tego miasta: {pressure} hPa</h4>
            </>
        )
    }

    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city} ` : content}


        </div>
    )
}

export default Result;