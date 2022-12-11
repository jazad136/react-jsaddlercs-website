import React from 'react';
import './App.css';
import sunPic from './images-index/sun-solid.svg'
function App() {
  return (
    <div className="App">
      <h3>J. Saddler</h3>
      <h3>Backends</h3>
      <ul>
        <li class="backendsItem">
          <div>
            <h3><a href="/weather">Michigan Weather</a></h3>
          </div>
          <div>
            <div className="itemSubContent">
              <img src={sunPic} alt="weather"/>
            </div>
              <h3 className="itemSubContent">Web Page</h3>
              <h3 className="itemSubContent">API</h3>
          </div>
        </li>
      </ul>
    </div>

  )
}

export default App;
