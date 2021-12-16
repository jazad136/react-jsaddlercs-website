import React, {Component} from 'react';
import './App.css';
import SelfPic from './images/homepage-img/SelfPicHome_Reduced.jpg';
class App extends Component { 
  render() { 
    return (
      <div>
      <div className="navBar">
          <div className="a-container">
              <div className="a">Home</div>
              <div className="a2">Projects</div>
              <div className="a3">Teaching</div>
          </div>
      </div>
      <div className="focus-content">
        <div className="a-space">a-space</div>
        <div className="b-container">
        <div class="b">
            <div className="homepage-img-box">
              <img alt="Jonathan A. Saddler" className="homepage-img" src={SelfPic}/>
            </div>
                <div className="b2-2">b2-2 (name)</div>
            </div>
            <div className="b2">
              <div className="nameplate">
                <h2>Jonathan A. Saddler, Ph. D.</h2>
              </div>
              <div className="logos">
                Logo A
              </div>
            </div>
        </div>
        <div class="b-space">b-space</div>
        <div class="c-container">
            <div class="c">
              ResLinks
            </div>
        </div>
        <div class="d-container">
            <div class="d">
              Copyright 2021
            </div>
        </div>
      </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
