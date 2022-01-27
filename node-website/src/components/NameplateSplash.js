import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import selfSplash from '../images/homepage-img/FullCaricatureWavy.png' 
import '../css/NameplateSplash.css'
export class NameplateSplash extends Component {
  render() {
    return (
      <Grid className="f-g">
        <Grid.Row>
          <Grid.Column>
            <Segment className="nameplate"><h2>Jonathan A. Saddler, Ph. D.</h2></Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment className="g">
                <Grid columns={2}>
                  {/* <Grid.Column>
                    <div class="g1">The Splash</div>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <img alt="PicHead" style={{width : '100px'}} src={selfSplash}/>
                  </Grid.Column> */}
                  
                    <div className="splash-txt">
                        Determined software developer with a desire
                        to publish interactive websites using the latest
                        technologies. Also, a Ph. D. researcher with an research interest in analyzing behaviors of software engineers. 
                        {/* <h3>A Ph. D. Researcher</h3><br/>
                        <h3>A Gap Jumper</h3><br/>
                        <h3>A Developer</h3> */}
                    </div>
                    <div className="splash-pic">
                      <img alt="PicHead" style={{width : '100px'}} src={selfSplash}/>
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
