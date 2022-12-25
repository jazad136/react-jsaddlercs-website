import React, {useState, useEffect} from 'react'
import weather from '../api/weather.js'
// eslint-disable-next-line
import WeatherInclude from './weather/WeatherInclude'
import WeatherIncVert from './weather/WeatherIncVert.js'
import WeatherSquares from './weather/double-weather/WeatherSquares.js'
// eslint-disable-next-line
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const OpenWeather = () => {
    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState('')
    const [frcSky, setFrcSky] = useState('')
    const [temp, setTemp] = useState(0.0)
    const [feelsLike, setFeelsLike] = useState(0.0)
    const [wind, setWind] = useState(0.0)
    const [frcLocation, setFrcLocation] = useState('')
    const getWeather = async () => { 
        setLoading(true)
        const response = await weather.get('/flint');
        console.log(response)
        setFrcLocation(response.data.locationStr)
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
    <Container>
        {/* <WeatherIncVert frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
        {/* <WeatherInclude frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
        <WeatherSquares frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/>
    </Container>
  )
}

export default OpenWeather