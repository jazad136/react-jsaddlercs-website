import React from 'react'
import {Grid} from 'semantic-ui-react'
const WeatherHalfCell = ({cellClass, lblClass, lbl,  valueClass, value}) => {
  return (
    <Grid.Column width={8}>
      <div class={cellClass}>
        <Grid columns={2}>
            <Grid.Column>
              <div class={lblClass}>
                <h3>
                  {lbl}
                </h3>
              </div>
            </Grid.Column>
      
            <Grid.Column>
            <div class={valueClass}>
              <h3>
                  {value}
              </h3>
            </div>
            </Grid.Column>
        </Grid>
      </div>
    </Grid.Column>
  )
}

export default WeatherHalfCell