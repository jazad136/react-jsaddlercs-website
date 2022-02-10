import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import Lines from './components/Lines';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Oswald: 400,400italic,700',
                   'Raleway: 400,400italic,700']
    }
})


// https://www.better.dev/how-to-add-fonts-to-a-react-project
export class App extends Component {
  state = {lines: []}
  
  setLines = (linesList) => {
    this.setState({lines: linesList})
  }
  processText = () => { 
    if(this.state.lines.length > 1) {
      return (<div>
        I processed {this.state.lines} lines.
      </div>) 
    }
    else { 
      return (<div>
        0 lines processed.  
      </div>);
    }
  }
  midiAcc = (e) => { 
    navigator.requestMIDIAccess()
    .then(function(access) {
  
       // Get lists of available MIDI controllers
       const inputs = access.inputs.values();
       const outputs = access.outputs.values();
       console.log('Inputs')
       
       while(inputs.hasNext()) { 
        console.log(inputs.next());
       }
       
       console.log(inputs);
       console.log('Outputs')
       console.log(outputs);
       access.onstatechange = function(e) {
         // Print information about the (dis)connected MIDI controller
         console.log(e.port.name, e.port.manufacturer, e.port.state);
       };
    });
  }
  render() {
    return (
      <div className="focus-content">
        This is where content goes. 
        <div>
          <input type="button"
          value="MIDITest"
          onClick={this.midiAcc} />
        </div>
        <Lines setLines={this.setLines}/>
        <div className="report">
          {this.processText()}
        </div>
      </div>
    );
  }
}

export default App;
