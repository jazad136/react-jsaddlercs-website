import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class VTView3 extends Component {
  
  static propTypes = {
    bedInfo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }
  
  render() {
    const {bedInfo, price} = this.props;

    return (
      <div className="vt-view">
        <div className="a">
          <div className="a1">Go Home</div>
          <div className="a2">Name</div>
        </div>
        <div className="b">Room Type: {bedInfo}</div>
        <div className="c">Best Price: {price}</div>
      </div>
    )
  }
}

export default VTView3