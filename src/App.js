import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import {BrowserRouter as Switch, Route} from 'react-router-dom';
// images and navbars - temporarily disabled. 
// eslint-disable-next-line
import SelfPic from './images/homepage-img/SelfPicHome_Reduced.jpg';
//import Navbar from './Navbar'

class App extends Component { 
  
  render() { 
    return (
      <Router>
        Hi there.
        <div className="container focus-content">
          This is where content goes.
        </div>
      </Router>
    );
  }
}

export default App;
