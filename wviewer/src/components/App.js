import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WebFont from 'webfontloader';
import OpenWeather from './OpenWeather';
import '../css-weather/App.css';

class App extends Component {
  constructor() {  
    super()   
    WebFont.load({
        google: {
            families: [
              'Oswald: 400, 400italic, 700',
              'Raleway: 400, 400italic, 700',
              'Droid Sans: 400, 400italic, 700']
        }
    })
  }

  render() { 
    return (
      <div>
        <OpenWeather />
      </div>
    )
  }
}

export default App;
