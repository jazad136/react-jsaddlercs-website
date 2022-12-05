import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'
import WeatherHalfCell from './WeatherHalfCell'
import WeatherCellWrapper from './WeatherCellWrapper'
import sunPic from '../../images-weather/sun-solid.svg'
import boltPic from '../../images-weather/bolt-solid.svg'
import fogPic from '../../images-weather/smog-solid.svg'
import '../../css-weather/App.css'
const WeatherInclude = ({frcLocation, frcSky, temp, feelsLike, wind, dateTime, loading}) => {
  
  const getAPITemp = (loading, inTemp) => 
  {
    if(loading) {
      return 'Loading...'
    }
    else if(inTemp == null) { 
      return ''
    }
    else {
      return `${inTemp} deg. F.`
    }
  }
  const getAPIString = (loading, inStr) => {
    if(loading) { 
      return 'Loading...'
    } 
    else if(inStr == null) {
      return '...'
    }
    else {
      return inStr
    }
  }
  const getAPIStringSpecial = (loadingStr, loading, inStr) => {
    if(loading) { 
      return loadingStr
    } 
    else if(inStr == null) {
      return '...'
    }
    else {
      return inStr
    }
  }
  const getAPINumber = (loading, inNum, inLbl) => { 
    if(loading) { 
      return 'Loading...'
    }
    else if(inNum === 0) { 
      return -1
    }
    else {
      return `${inNum} ${inLbl}`
    }
  }
  const getForecastImg = (frcSky) => { 
    var img = null
    if(frcSky.toUpperCase() === 'RAIN') {
      img = boltPic
    }
    else if(frcSky.toUpperCase() === 'CLOUDS' || 
    frcSky.toUpperCase() === 'FOG') {
      img = fogPic
    }
    else {
      img = sunPic
    }
    return (
      <div className="frcImage">
        <Image src={img} className="sunPic"/>
      </div>
    );
  }
  const getAPITime = (loading, dtIn) => { 
    if(loading) { 
      return "..."
    }
    else { 
      return <span>{formatDate(dtIn)}<br/>{formatTime(dtIn)}</span>
      
    }
  }
  const formatTime = (dtIn) => {
    var dtObj = new Date(dtIn)
    // var hour = dtObj.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit', hour12: true})
    var time = dtObj.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit', hour12: true})
    return (
      <span>
        {time + ' EST'} 
      </span>
    )
  }
  const formatDate = (dtIn) => {
    var dtObj = new Date(dtIn)
    var weekD = dtObj.toLocaleDateString('en-us', {weekday: 'long'})
    var month = dtObj.toLocaleDateString('en-us', {month: 'long'})
    var day = dtObj.toLocaleDateString('en-us', {day: 'numeric'})
    var year = dtObj.toLocaleDateString('en-us', {year: 'numeric'})
    return (
      <span>
        {weekD + ', ' + month + ' ' + day + ', ' + year}
      </span>
    )
  }
  return (
      <Grid columns={2} className="wViewer">
        <WeatherCellWrapper cellClass="wa1 subtitle">
          <h2>
            Weather
          </h2>
          <h3>
            Forecast for {getAPIStringSpecial('...', loading, frcLocation)}
          </h3>
        </WeatherCellWrapper>
        <WeatherCellWrapper cellClass="wa2">
          {getForecastImg(frcSky)}
        </WeatherCellWrapper>
        <WeatherHalfCell cellClass="wa3"  lblClass="skyLbl" lbl="Forecast" valueClass="frcSky" 
        value={getAPIString(loading, frcSky)}
        />
        <WeatherHalfCell cellClass="wb3"  
          lblClass="tempLbl" lbl="Temperature:" 
          valueClass="temp" 
          value={getAPITemp(loading, temp)}
        />
        <WeatherHalfCell 
          cellClass="wa4"  
          lblClass="windLbl" lbl="Wind Speed:" 
          valueClass="wind" 
          value={getAPINumber(loading, wind, 'mi./hr.')}
        />
        <WeatherHalfCell
          cellClass="wb4"  
          lblClass="feelsLbl" lbl="Feels Like:" 
          valueClass="feels" 
          value={getAPITemp(loading, feelsLike)}
        />
        <WeatherCellWrapper cellClass="wa5">
        <div className="timeLbl">
          <h3>Time of Forecast:</h3>
        </div>
        <div className="frcTime">
          <h3>
            {getAPITime(loading, dateTime)}
          </h3>
        </div>
        </WeatherCellWrapper>
      </Grid>
  )
}

export default WeatherInclude