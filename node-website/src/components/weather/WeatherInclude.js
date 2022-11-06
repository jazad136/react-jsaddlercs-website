import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'
import WeatherHalfCell from './WeatherHalfCell'
import sunPic from '../../images/weather-img/sun-solid.svg'
import './weather.css'
import WeatherCellWrapper from './WeatherCellWrapper'
const WeatherInclude = () => {
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
            <div class="frcImage">
                <Image src={sunPic} className="sunPic"/>
            </div>
          </WeatherCellWrapper>
          <WeatherHalfCell 
            cellClass="wa3"  lblClass="skyLbl" 
            lbl="Forecast" valueClass="frcSky"
            value="sky_forecast"
          />
          <WeatherHalfCell 
            cellClass="wb3"  
            lblClass="tempLbl" lbl="Temperature:" 
            valueClass="temp" value="1 deg. F"
          />
          <WeatherHalfCell 
            cellClass="wa4"  
            lblClass="windLbl" lbl="Wind Speed:" 
            valueClass="wind" value="3 miles/hour"
          />
          <WeatherHalfCell
            cellClass="wb4"  
            lblClass="feelsLbl" lbl="Feels Like:" 
            valueClass="feels" value="1 deg. F"
          />
          <WeatherCellWrapper cellClass="wa5">
          <div class="timeLbl">
            <h3>Time of Forecast:</h3>
          </div>
          <div class="frcTime">
            <h3>
              8:00 PM EST
            </h3>
          </div>
          </WeatherCellWrapper>
        </Grid>
    </Container>
  )
}

export default WeatherInclude