import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import WeatherStatus from './WeatherStatus'
// import weather from '../../api/weather.js'
export class WeatherDouble extends Component {
    
  render() {
    const {loading, weatherStates} = this.props
    const {frcLocation1, frcSky1, temp1, feelsLike1, wind1, dateTime1} = weatherStates[0];
    const {frcLocation2, frcSky2, temp2, feelsLike2, wind2, dateTime2} = weatherStates[1];
    
    return (
        <Container>
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <WeatherStatus 
                        loading={loading}
                        frcLocation={frcLocation1} 
                        frcSky={frcSky1} 
                        temp={temp1} 
                        feelsLike={feelsLike1} 
                        wind={wind1} 
                        dateTime={dateTime1} 
                     />
                </Grid.Column>
                <Grid.Column width={8}>
                    <WeatherStatus 
                        loading={loading}
                        frcLocation={frcLocation2} 
                        frcSky={frcSky2} 
                        temp={temp2} 
                        feelsLike={feelsLike2} 
                        wind={wind2} 
                        dateTime={dateTime2} 
                     />
                </Grid.Column>
            </Grid>
        </Container>
    )
  }
}

export default WeatherDouble