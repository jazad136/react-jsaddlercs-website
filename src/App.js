import React, {Component} from 'react';
import './App.css';
import Words from './view/Words';

class App extends Component { 
  render() { 
    return (
      <div>
        <div>Jonathan App</div>
        <div>Here are the Words</div>
        <Words word="Fearless"/>
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
