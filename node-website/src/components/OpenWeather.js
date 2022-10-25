import React, {useState} from 'react'
import weather from '../api/weather.js'


const OpenWeather = () => {
    const getWeather = async () => { 
        const response = await weather.get('/')
        setTemp(response.temp)
        setFeelsLike(response.feelsLike)
    }
    const [temp, setTemp] = useState(1)
    const [feelsLike, setFeelsLike] = useState(2)
    const [dateTime, setDateTime] = useState('')
    
    // useEffect(() => {
    //     getWeather()
    // }, [])
  return (
    <div>
        <div>
            <h2>Weather in</h2>
            <h2>Flint, Michigan</h2> 
        </div>
        <div>
            <h3>Temp: {temp}</h3>
            <h3>Feels Like: {feelsLike}</h3>
        </div>
    </div>
  )
}

export default OpenWeather