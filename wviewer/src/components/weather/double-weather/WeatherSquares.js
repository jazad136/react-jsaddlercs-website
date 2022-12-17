import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import WeatherStatus from './WeatherStatus'
// import weather from '../../api/weather.js'
export class WeatherSquares extends Component {
    state = {
        loading: false,
        dateTime: '',
        frcSky: '',
        temp: 0.0,
        feelsLike: 0.0,
        wind: 0.0,
        frcLocation: ''
    }
    // const [loading, setLoading] = useState(false)
    // const [dateTime, setDateTime] = useState('')
    // const [frcSky, setFrcSky] = useState('')
    // const [temp, setTemp] = useState(0.0)
    // const [feelsLike, setFeelsLike] = useState(0.0)
    // const [wind, setWind] = useState(0.0)
    // const [frcLocation, setFrcLocation] = useState('')
    setStatistics(temp, feels, wind, dateTime) { 
        this.setState({
            temp: temp, 
            feelsLike: feels, 
            windSpeed: wind,
            dateTime: dateTime
        })
    }
    setForecast(sky, location) {
        this.setState({frcSky: sky, frcLocation: location})
    }
    setLoading(loading) {
        this.setState({loading: loading})
    }

    async setWeather() { 
        this.setLoading(true)
        // const response = await weather.get('/flint');
        // console.log(response)
        // const {temp, feelsLike, windSpeed, dateTime} = response.data;
        const {temp, feelsLike, windSpeed, dateTime} = this.props;
        this.setStatistics(temp, feelsLike, windSpeed, dateTime)
        // const {sky, location} = response.data;
        const {sky, location} = this.props
        this.setForecast(sky, location)
        this.setLoading(false)
        // setFrcLocation(response.data.locationStr)
        // setTemp(response.data.temp)
        // setFrcSky(response.data.frcSky)
        // setFeelsLike(response.data.feelsLike)
        // setDateTime(response.data.time)
        // setWind(response.data.windSpeed)
        // setLoading(false)
    }
    componentDidMount() { 
        this.setWeather()
    }
    // useEffect(() => {
    //     getWeather()
    // }, [])
  render() {
    // const {frcLocation, frcSky, temp, feelsLike, wind, dateTime, loading} = this.props
    const {loading, 
        temp, feelsLike, wind, dateTime, // statistics 
        frcSky, frcLocation} // forecast 
        = this.state
    
    return (
        <Container>
            <Grid columns={2}>
                <Grid.Column width={8}>
                    {/* <div>WeatherInclude2</div> */}
                    <WeatherStatus frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading} />
                </Grid.Column>
                <Grid.Column width={8}>
                    {/* <div>WeatherInclude2</div> */}
                    <WeatherStatus frcLocation={frcLocation} frcSky={frcSky} temp={temp} feelsLike={feelsLike} wind={wind} dateTime={dateTime} loading={loading} />
                </Grid.Column>
            </Grid>
        </Container>
    )
  }
}

export default WeatherSquares