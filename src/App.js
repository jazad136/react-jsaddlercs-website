import React, {Component} from 'react';
import './App.css';
class App extends Component { 
  render() { 
    return (
      <div>
      <div className="nav-container">
          <div className="a-container">
              <div className="a">Home</div>
              <div className="a2">Projects</div>
              <div className="a3">Teaching</div>
          </div>
      </div>
      <div className="focus-content">
        <div className="a-space">a-space</div>
        <div className="b-container">
          
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
