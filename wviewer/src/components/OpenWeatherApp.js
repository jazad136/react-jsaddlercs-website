import React, {useState, useEffect} from 'react'
import weather from '../api/weather.js'
import {Container} from 'semantic-ui-react'
class OpenWeatherApp extends React.Component {
  state = {
    loading: false,
    states: [
    {
      dateTime: '',
      frcSky: '',
      temp: 0.0,
      feelsLike: 0.0,
      windSpeed: 0.0,
      frcLocation: ''
    },
    {
      dateTime: '',
      frcSky: '',
      temp: 0.0,
      feelsLike: 0.0,
      windSpeed: 0.0,
      frcLocation: ''
    }
  ]
    // flint : {
    //   dateTime: '',
    //   frcSky: '',
    //   temp: 0.0,
    //   feelsLike: 0.0,
    //   windSpeed: 0.0,
    //   frcLocation: ''
    // },
    // lansing : {
    //   dateTime: '',
    //   frcSky: '',
    //   temp: 0.0,
    //   feelsLike: 0.0,
    //   windSpeed: 0.0,
    //   frcLocation: ''
    // }
  }
  async componentDidMount() { 
    this.setLoading(true)
    const response = await weather.get('/flint');
    console.log(response)
    
    this.setStatistics(0, response.data)
    this.setForecast(0, response.data)
    this.setStatistics(1, response.data)
    this.setForecast(1, response.data)
    this.setLoading(false) 
  }
  setStatistics(locNum, data) {
    const {temp, feelsLike, windSpeed, time} = data;
    var items = [...this.state.states];  
    console.log(items)
    var item = items[locNum];
    item.temp = temp;
    item.feelsLike = feelsLike;
    item.windSpeed = windSpeed;
    item.dateTime = time;
    
    items[locNum] = item;
    this.setState({states: items}) 
  }
  setForecast(locNum, data) {
    const {frcSky, locationStr} = data;
    var items = [...this.state.states];  
    var item = items[locNum]
    item.frcSky = frcSky;
    item.frcLocation = locationStr;
    items[locNum] = item
    this.setState({states: items}) 
  }
  setLoading(loading) {
      this.setState({loading: loading})
  }
  render() {
    // const {temp, feelsLike, wind, dateTime, frcLocation, frcSky, loading} = this.state; 
    const {loading, states} = this.state
    return (  
      <Container>
          {/* <WeatherIncVert frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
          {/* <WeatherInclude frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/> */}
          <WeatherSquares frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading}/>
          WeatherSquares
      </Container>
    )
  }
}

export default OpenWeatherApp