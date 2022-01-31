import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import LineFieldSet from './components/LineFieldSet';
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
        <form>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Segment className="a">
                a
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <LineFieldSet lineNum={1} classStub='b'/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}><Segment className="a2">a2</Segment></Grid.Column>
            <Grid.Column width={10}>
              <LineFieldSet lineNum={2} classStub='c'/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}><Segment className="a3">a3</Segment></Grid.Column>
            <Grid.Column width={10}>
              <LineFieldSet lineNum={3} classStub='d'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
        </form>
      </div>
    );
  }
}

export default App;
