import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid, Segment} from 'semantic-ui-react';
import ImageNameplate from './components/ImageNameplate.js';
// import {BrowserRouter as Switch, Route} from 'react-router-dom';
// images and navbars - temporarily disabled. 
// eslint-disable-next-line
import SelfPic from './images/homepage-img/SelfPicHome_Reduced.jpg';
//import Navbar from './Navbar'

class App extends Component { 
  // thanks goes out to https://www.section.io/engineering-education/transitioning-from-bootstrap-to-semantic-ui-react/
  // for a tutorial on transitioning from bootstrap to react
  render() { 
    return (
      <Router>
        Hi there.
        <div className="container focus-content">
          This is where content goes.
          
          {/* <Grid columns="6">
            <Grid.Row>
              <Grid.Column><div className="a">a</div></Grid.Column>
                  <Grid.Column><div className="b">b</div></Grid.Column>
                  <Grid.Column><div className="c1">c1</div></Grid.Column>
                  <Grid.Column><div className="c2">c2</div></Grid.Column>
                  <Grid.Column><div className="c3">c3</div></Grid.Column>
                  <Grid.Column><div className="c4">c4</div></Grid.Column>
            </Grid.Row>
          </Grid>
           */}

          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Segment className="a">a</Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid columns={5}>
                  <Grid.Column><Segment className="b">b</Segment></Grid.Column>
                  <Grid.Column><Segment className="c1">c1</Segment></Grid.Column>
                  <Grid.Column><Segment className="c2">c2</Segment></Grid.Column>
                  <Grid.Column><Segment className="c3">c3</Segment></Grid.Column>
                  <Grid.Column><Segment className="c4">c4</Segment></Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <ImageNameplate/>
            <Grid.Row>
              <Grid.Column width={6}>
                <Segment className="g">
                  <div>g</div>
                  <Segment className="g1">g1</Segment>
                  <Segment className="g2">g2</Segment>
                  <Segment className="g3">g3</Segment>
                  <Segment className="g4">g4</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid columns={3}>
                  <Grid.Column><Segment className="h">h</Segment></Grid.Column>
                  <Grid.Column><Segment className="i">i</Segment></Grid.Column>
                  <Grid.Column><Segment className="j">j</Segment></Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={6}>
                <Segment className="k">
                  <div>k</div>
                  <Segment className="k1">k1</Segment>
                  <Segment className="k2">k2</Segment>
                  <Segment className="k3">k3</Segment>
                  <Segment className="k4">k4</Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid columns="2">
                  <Grid.Column><Segment className="L1">L1</Segment></Grid.Column>
                  <Grid.Column><Segment className="L2">L2</Segment></Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment className="m">m</Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Segment className="n">n</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className="o">o</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className="p">p</Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="q">q</div>
                <Segment className="q1">q1</Segment>
              </Grid.Column>
              <Grid.Column>
                <Grid columns={3}>
                  <Grid.Column><Segment className="q2-1">q2-1</Segment></Grid.Column>
                  <Grid.Column><Segment className="q2-2">q2-2</Segment></Grid.Column>
                  <Grid.Column><Segment className="q2-3">q2-3</Segment></Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column><Segment className="r">r</Segment></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column><Segment className="s">s</Segment></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column><Segment className="t">t</Segment></Grid.Column>
            </Grid.Row>
          </Grid>

          
        </div>
      </Router>
    );
  }
}

export default App;
