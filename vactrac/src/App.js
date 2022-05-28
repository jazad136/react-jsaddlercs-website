import React, { Component } from 'react'
import VTView2 from './components/VTView2';
import VTView3 from './components/VTView3'
import 'fomantic-ui/dist/semantic.min.css'
export class App extends Component {
  state = {hotels: {
    roomId: 1,
    
    // name: "Holiday Inn Express Strasburg",
    // bedInfo: "2Q",
    // price: "118.85",
    // stayStart: "0404",
    // nights: "3",
    // bestPrice: "356.55",
    // bestPriceRetrievedDate: "2022-03-23 00:00:00",
  }}
  sortedRanks(hotels) {
    if(!hotels) { 
      return [];
    }

    // thanks goes out to: 
    // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
    var outEls = hotels.costLines.map(line => parseFloat(line.price))

    outEls.sort((aPrice, bPrice) => {
      if(aPrice - bPrice > 0) { 
        return -1
      }
      if(aPrice - bPrice < 0) { 
        return 1
      }
      return 0
    })
    return outEls;
  }
  render() {
    return (
      <div>
        <VTView3
          name="Holiday Inn Express Strasburg"
          bedInfo="2Q"
          price="118.85"
          stayStart="0404"
          nights="3"
          bestPrice="356.55"
          bestPriceRetrievedDate="2022-03-23 00:00:00"
          rankedNights={this.sortedRanks(this.state.hotels)}
        />
      </div>
    );
  }
}

export default App