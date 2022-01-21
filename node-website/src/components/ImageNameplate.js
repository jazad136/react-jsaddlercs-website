import React, { Component } from 'react'
import {Grid, Segment} from 'semantic-ui-react';
import "../css/nameplate.css";
import SelfPic from "../images/homepage-img/SelfPicHome_Reduced.jpg"
export class ImageNameplate extends Component {
    
    render() {
        return (
          <Grid.Row className="nameplate">
            <Grid.Column width={6}>
              <Segment className="e">
                <img className="selfPic" alt="Jonathan A. Saddler, Ph. D." src={SelfPic}/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid.Column>
                <Segment className="f">
                  <h2>Jonathan A. Saddler, Ph. D.</h2>
                </Segment>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        )
    }
}

export default ImageNameplate
