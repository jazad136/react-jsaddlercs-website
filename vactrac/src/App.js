import React from 'react'
import SearchBar from './components/SearchBar';
import VTView from './components/VTView2';

export class App extends React.Component {
  
  constructor() {
    WebFont.load({
        google: {
            families: [
              'Oswald: 400, 400italic, 700',
              'Raleway: 400, 400italic, 700',
              'Droid Sans: 400, 400italic, 700']
        }
    })
    this.state = {loading: true, rooms : [], hotel1 : null}
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <VTView />
      </div>
    )
  }
}

export default App;