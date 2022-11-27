import React, {useState, useEffect} from 'react'
import weather from '../api/weather.js'
// import WeatherInclude from './weather/WeatherInclude'
import WeatherIncVert from './weather/WeatherIncVert.js'
const OpenWeather = () => {
    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState('')
    const [frcSky, setFrcSky] = useState('')
    const [temp, setTemp] = useState(0.0)
    const [feelsLike, setFeelsLike] = useState(0.0)
    const [wind, setWind] = useState(0.0)
    
    const getWeather = async () => { 
        setLoading(true)
        const response = await weather.get();
        console.log(response)
        setTemp(response.data.temp)
        setFrcSky(response.data.frcSky)
        setFeelsLike(response.data.feelsLike)
        setDateTime(response.data.time)
        setWind(response.data.windSpeed)
        setLoading(false)
    }
    
    useEffect(() => {
        getWeather()
    }, [])
  return (
    <div>
        {/* <WeatherInclude frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime}/> */}
        <WeatherIncVert frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/>
    </div>
  )
}

export default OpenWeather