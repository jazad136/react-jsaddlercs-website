import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'
import WeatherHalfCell from './WeatherHalfCell'
import sunPic from '../../images/weather-img/sun-solid.svg'
import './weather.css'
import WeatherCellWrapper from './WeatherCellWrapper'
const WeatherInclude = ({frcSky, temp, feelsLike, wind, dateTime}) => {
  
  const formatTime = (dtIn) => {
    var dtObj = new Date(dtIn)
    var hour = dtObj.getHours()
    var dayPart =  hour > 1 && hour < 13 ? "AM" : "PM"
    hour = dayPart === 'PM' ? hour - 12 : hour
    var min = dtObj.getMinutes()
    return hour + ":" + min + " " + dayPart + " EST"
  }
  return (
    <Container>
        <Grid columns={2} className="wViewer">
          <WeatherCellWrapper cellClass="wa1 subtitle">
            <h2>
              Weather
            </h2>
            <h3>
              Forecast for Flint, MI
            </h3>
          </WeatherCellWrapper>
          <WeatherCellWrapper cellClass="wa2">
            <div className="frcImage">
                <Image src={sunPic} className="sunPic"/>
            </div>
          </WeatherCellWrapper>
          <WeatherHalfCell 
            cellClass="wa3"  lblClass="skyLbl" 
            lbl="Forecast" valueClass="frcSky"
            value={frcSky}
          />
          <WeatherHalfCell 
            cellClass="wb3"  
            lblClass="tempLbl" lbl="Temperature:" 
            valueClass="temp" value={`${temp} deg. F.`}
          />
          <WeatherHalfCell 
            cellClass="wa4"  
            lblClass="windLbl" lbl="Wind Speed:" 
            valueClass="wind" value={`${wind} mi./hr.`}
          />
          <WeatherHalfCell
            cellClass="wb4"  
            lblClass="feelsLbl" lbl="Feels Like:" 
            valueClass="feels" value={`${feelsLike} deg. F.`}
          />
          <WeatherCellWrapper cellClass="wa5">
          <div className="timeLbl">
            <h3>Time of Forecast:</h3>
          </div>
          <div className="frcTime">
            <h3>
              <span>{new Date(dateTime).toDateString()}</span>
              &nbsp;<br/>
              <span>
              {formatTime(dateTime)}
              </span>
            </h3>
          </div>
          </WeatherCellWrapper>
        </Grid>
    </Container>
  )
}

export default WeatherInclude