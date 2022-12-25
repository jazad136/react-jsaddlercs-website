import React from 'react'
import weather from '../../../api/weather.js'
import {Container} from 'semantic-ui-react'
import WeatherDouble from './WeatherDouble.js'
import 'semantic-ui-css/semantic.min.css'
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
  }
  async componentDidMount() { 
    this.setLoading(true)
    var response = await weather.get('/flint');
    console.log(response)
    
    this.setStatistics(0, response.data)
    this.setForecast(0, response.data)
    
    response = await weather.get('/lansing')

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
    const {loading, states} = this.state
    return (  
      <Container>
          <WeatherDouble 
            loading={loading} 
            weatherStates={states}
          />
          {/* WeatherDouble */}
      </Container>
    )
  }
}

export default OpenWeatherApp