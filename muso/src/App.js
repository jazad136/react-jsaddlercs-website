import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import {Grid, Segment} from 'semantic-ui-react';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Oswald: 400,700',
                   'Raleway: 400,700']
    }
})
// https://www.better.dev/how-to-add-fonts-to-a-react-project
export class App extends Component {
  render() {
    return (
      <div className="focus-content">
        This is where content goes. 
        <Grid columns={2}>
          <Grid.Column width={2}>
            <Segment className="a">a</Segment>
          </Grid.Column>
          <Grid.Column>
            <Grid columns={3}>
              <Grid.Column>
                <Segment className="b">
                  b
                  <Grid columns={1}>
                    <Grid.Column><Segment className="b1-1">b1-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="b1-2">b1-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="b2-1">b2-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="b2-2">b2-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="b3-1">b3-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="b3-2">b3-2</Segment></Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className="c">
                  c
                  <Grid columns={1}>
                    
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
