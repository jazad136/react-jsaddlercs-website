import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import OpenWeather from './OpenWeather.js'
import selfSplash from '../images/homepage-img/FullCaricatureFlat.png' 
import '../css/NameplateSplash.css'
export class NameplateSplash2 extends Component {
  render() {
    return (
      <Grid className="f-g">
        <Grid.Row>
          <Grid className="f-g-1" columns={2}>
            <Grid.Column>
              <Segment basic className="nameplate">
                <h2>Jonathan A. Saddler, Ph. D.</h2>
              </Segment>   
            </Grid.Column> 
            <Grid.Column>
              <Segment className="weatherPlate">
                <OpenWeather />
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column>
            <Segment basic className="nameplate">
              <h1>Jonathan A. Saddler, Ph. D.</h1>
            </Segment>
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row>
          <Grid.Column>
            <Segment basic className='splash'>
              <Grid columns={2}>
                <div className="splash-txt s1">
                    Focused on developer comprehension <br/>
                    and behavior...
                </div>
                <div className="splash-pic middle">
                  <img
                    alt="PicHead"
                    src={selfSplash}
                  />
                </div>
                <div className="splash-txt s2">
                  ... and how a vision gives way to information. 
                </div>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}



export default NameplateSplash2;
