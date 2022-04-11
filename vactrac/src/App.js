import React, { Component } from 'react'
import VTView3 from './components/VTView3'

export class App extends Component {
  render() {
    return (
      <div>
        <VTView3 bedInfo="2Q" price="112.50"/>
      </div>
    )
  }
}

export default App