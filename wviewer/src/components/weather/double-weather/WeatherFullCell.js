import React from 'react'
import {Grid} from 'semantic-ui-react'
const WeatherFullCell = ({cellClass, lblClass, lbl,  valueClass, value}) => {
  return (
    <Grid.Column width={16}>
      <div className={cellClass}>
        <Grid columns={2}>
            <Grid.Column>
              <div className={lblClass}>
                <h3>
                  {lbl}
                </h3>
              </div>
            </Grid.Column>
      
            <Grid.Column>
            <div className={valueClass}>
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

export default WeatherFullCell