import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'

export class WeatherCellWrapper extends Component {
  render() {
    return (
      <Grid.Column width={16}>
        <div className={this.props.cellClass}>
          {this.props.children}
        </div>
      </Grid.Column>
    )
  }
}

export default WeatherCellWrapper