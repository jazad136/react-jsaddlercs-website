import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class VTView3 extends Component {
  
  static propTypes = {
    bedInfo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stayStart: PropTypes.string.isRequired,
    nights: PropTypes.number.isRequired,
    bestPrice: PropTypes.string.isRequired,
    retrievedDate: PropTypes.string.isRequired
  }
  
  getStayStartDate(startCode) { 
    switch(startCode) { 
      case '0418': return 'April 18th, 2022';
      case '0411': return 'April 11th, 2022';
      case '0404': return 'April 4th, 2022'; 
      case '0328': return 'March 28th, 2022';
      default: return ''
    }
  }

  getTimestampFullDate(timestamp) { 
    // format: 2022-03-21 00:00:00

    const mons = ['Jan','Feb','Mar','Apr','May','Jun',
            'Jul','Aug','Sep','Oct','Nov','Dec']
    var p1p2 = timestamp.split(' ')
    var p1 = p1p2[0]
    var yymmdd  = p1.split('-')
    var dd = yymmdd[2]
    var mm = yymmdd[1]
    const yy = yymmdd[0]
    
    const mmStr = mons[parseInt(mm)]
    const ddStr = parseInt(dd).toString()
    return mmStr + ' ' + ddStr + ', ' + yy
     
  }
  render() {
    // const {bedInfo, price, stayStart, nights, bestPrice, bestPriceRetrievedDate, pricesRanked} = this.props;
    const {bedInfo, price, stayStart, nights, bestPrice, bestPriceRetrievedDate, rankedNights} = this.props;
    return (
      <div className="vt-view">
        <div className="a">
          <div className="a1">Go Home</div>
          <div className="a2">Name</div>
        </div>
        <div className="b">Room Type: {bedInfo}</div>
        <div className="c">Best Price: {price}</div>
        <div className="d">Trip Stay Start: {this.getStayStartDate(stayStart)}</div>
        <div className="e">Number of nights: {nights}</div>
        <div className="f">to
          <div className="f1">
            <h3>Best Price for Three NIghts:</h3>
            <h3>{bestPrice}</h3>
          </div>
          <div className="f2">
            <h3>Reported on:</h3>
            <h3>{this.getTimestampFullDate(bestPriceRetrievedDate)}</h3>
          </div>
        </div>
        <div className="g">

        </div>
      </div>
    )
  }
}

export default VTView3