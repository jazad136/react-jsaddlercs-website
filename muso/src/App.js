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
        
        {/* <Grid columns={3}>
          <Grid.Column width={2}>
            <Segment className="a">a</Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid columns={2}>
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
                    <Grid.Column><Segment className="c1-1">c1-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="c1-2">c1-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="c2-1">c2-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="c2-2">c2-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="c3-1">c3-1</Segment></Grid.Column>
                    <Grid.Column><Segment className="c3-2">c3-2</Segment></Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
            <Grid.Column width={8}>
                <div className="d">d</div>
                <Grid columns="1">
                  <Grid.Column>

                  </Grid.Column>
                </Grid>
              </Grid.Column>
          </Grid.Column>
        </Grid> */}
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment className="a">
                a
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="b">
                b
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column><Segment className="b1">b1</Segment></Grid.Column>
                    <Grid.Column><Segment className="b1-2">b1-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="b1-3">b1-3</Segment></Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column><Segment className="b2">b2</Segment></Grid.Column>
                    <Grid.Column><Segment className="b2-2">b2-2</Segment></Grid.Column>
                    <Grid.Column><Segment className="b2-3">b2-3</Segment></Grid.Column>
                  </Grid.Row>
                </Grid>
                </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Segment className="a2">a2</Segment></Grid.Column>
            <Grid.Column>
              <Segment className="c">
              c
              <Grid columns={3}>
                <Grid.Row>
                  <Grid.Column><Segment className="c1">c1</Segment></Grid.Column>
                  <Grid.Column><Segment className="c1-2">c1-2</Segment></Grid.Column>
                  <Grid.Column><Segment className="c1-3">c1-3</Segment></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column><Segment className="c2">c2</Segment></Grid.Column>
                  <Grid.Column><Segment className="c2-2">c2-2</Segment></Grid.Column>
                  <Grid.Column><Segment className="c2-3">c2-3</Segment></Grid.Column>
                </Grid.Row>
              </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Segment className="a3">a3</Segment></Grid.Column>
            <Grid.Column>
              <Segment className="d">
                d
                <Grid columns={3}>
                  
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
