import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Oswald: 400,700',
                   'Raleway: 400,700']
    }
})
// https://www.better.dev/how-to-add-fonts-to-a-react-project
export class App extends Component {
  render() {
    return (
        <div style={{fontFamily: "Oswald"}}>Hi there.</div>
    );
  }
}

export default App;
