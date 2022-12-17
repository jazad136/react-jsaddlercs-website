import React, {useState, useEffect} from 'react'
import weather from '../api/weather.js'
// eslint-disable-next-line
import WeatherInclude from './weather/WeatherInclude'
import WeatherIncVert from './weather/WeatherIncVert.js'
import WeatherSquares from './weather/double-weather/WeatherSquares.js'
// eslint-disable-next-line
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const OpenWeatherApp = () => {
    
  return (
    <Container>
        {/* <WeatherIncVert frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
        {/* <WeatherInclude frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
        <WeatherSquares frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/>
    </Container>
  )
}

export default OpenWeatherApp