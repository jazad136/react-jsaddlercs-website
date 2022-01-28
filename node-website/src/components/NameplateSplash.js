import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import selfSplash from '../images/homepage-img/FullCaricatureFlat.png' 
import '../css/NameplateSplash.css'
export class NameplateSplash extends Component {
  render() {
    return (
      <Grid className="f-g">
        <Grid.Row>
          <Grid.Column>
            <Segment basic className="nameplate">
              <h1>Jonathan A. Saddler, Ph. D.</h1>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment className='splash'>
              <Grid columns={2}>
                {/* <Grid.Column>
                    <div class="g1">The Splash</div>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <img alt="PicHead" style={{width : '100px'}} src={selfSplash}/>
                  </Grid.Column> */}

                <div className="splash-txt">
                  <p>
                    {/* Determined software developer with a desire to publish
                  interactive websites using the latest technologies.  */}
                  Determined and focused on developer behavior
                  </p>
                  <p>
                    {/* A Ph. D. researcher interested in analyzing
                    behaviors of software engineers. */}
                    ... and how a vision gives way to information. 
                  </p>
                  {/* <h3>A Ph. D. Researcher</h3><br/>
                        <h3>A Gap Jumper</h3><br/>
                        <h3>A Developer</h3> */}
                </div>
                <div className="splash-pic">
                  <img
                    alt="PicHead"
                    style={{ width: "100px" }}
                    src={selfSplash}
                  />
                </div>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}



export default NameplateSplash;
