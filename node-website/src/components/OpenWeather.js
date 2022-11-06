import React, {useState, useEffect} from 'react'
import weather from '../api/weather.js'
import WeatherInclude from './weather/WeatherInclude'

const OpenWeather = () => {
    const [dateTime, setDateTime] = useState('')
    const [temp, setTemp] = useState(0.0)
    const [feelsLike, setFeelsLike] = useState(0.0)
    
    const getWeather = async () => { 
        const response = await weather.get();
        console.log(response)
        setTemp(response.data.temp)
        setFeelsLike(response.data.feelsLike)
        setDateTime(response.data.time)
    }
    
    useEffect(() => {
        getWeather()
    }, [])
  return (
    <div>
        <WeatherInclude/>
        {/* <div>
            <h3>Weather Forecast, Flint, Michigan</h3> 
        </div>
        <div>
            <h3>Temp: {temp}</h3>
            <h3>Feels Like: {feelsLike}</h3>
        </div> */}
    </div>
  )
}

export default OpenWeather