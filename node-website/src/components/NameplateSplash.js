import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react'; 
export class NameplateSplash extends Component {
  render() {
    return (
        <div className="f-g">
            <Segment className="f"><h2>Jonathan A. Saddler, Ph. D.</h2></Segment>
            <Segment className="g">
                The Splash
            </Segment>
        </div>
    );
  }
}

export default NameplateSplash;
