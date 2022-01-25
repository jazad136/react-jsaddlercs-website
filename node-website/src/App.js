import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid, Segment, Button, Container, Card} from 'semantic-ui-react';
import ImageNameplate from './components/ImageNameplate.js';
import WebFont from 'webfontloader';

// import {BrowserRouter as Switch, Route} from 'react-router-dom';
// images and navbars - temporarily disabled. 
// eslint-disable-next-line
import SelfPic from './images/homepage-img/SelfPicHome_Reduced.jpg';

import cv_pdf from './images/homepage-img/JSaddler_CV.pdf';
import resume_pdf from './images/homepage-img/JSaddler_Resume.pdf';
//import Navbar from './Navbar'
import Conferences from './components/Conferences'
import Workshops from './components/Workshops';

class App extends Component { 
  constructor() {  
    super()   
    WebFont.load({
        google: {
            families: [
              'Oswald: 400,700',
              'Raleway: 400,700']
        }
    })
  }
  // thanks goes out to https://www.section.io/engineering-education/transitioning-from-bootstrap-to-semantic-ui-react/
  // for a tutorial on transitioning from bootstrap to react
  render() { 
    return (
      <Router>

        Hi there.
        {/* <div className="container focus-content" style={{width: "80%",
  marginLeft: "10%"}}> */}
        <Container className="focus-content">
          This is where content goes.
          
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Segment className="a">a</Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid columns={4}>
                  <Grid.Column><Segment className="b">Home</Segment></Grid.Column>
                  <Grid.Column></Grid.Column>
                  <Grid.Column></Grid.Column>
                  <Grid.Column><Segment className="c4">c4</Segment></Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <ImageNameplate/>
            <Grid.Row>
              <Grid.Column width={6}>

                <Segment className="g">
                  {/* <Segment className="g1">g1</Segment>
                  <Segment className="g2">g2</Segment>
                  <Segment className="g3">g3</Segment>
                  <Segment className="g4">g4</Segment> */}
                  
                  <Grid columns={2}>
                    <Grid.Column>
                    <div className="g1">
                      <Button basic href={cv_pdf}>CV</Button>
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div className="g2">
                      <Button basic href={resume_pdf}>Resume</Button>
                    </div>
                    </Grid.Column>
                  </Grid>
                  <div className="g3"><a href="https://www.linkedin.com/in/jonathan-a-saddler/">LinkedIn</a></div>
                  <div className="g4"><a href="https://www.researchgate.net/profile/Jonathan-Saddler">ResearchGate</a></div>
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
              <Grid.Column>
                <Segment className="r">
                  r
                  <Conferences />
                {/* <dl class="conference">
                  <dt>Conference Proceedings</dt>
                  <dd>
                    <ol>
                      <li><span class="me">Saddler, Jonathan A.</span>, Peterson, Cole S., Sama, Sanjana, 
                      Nagaraj, Shruthi, Baysal, Olga, Guerrouj, Latifa, and Sharif, Bonita.
                      &quot;Studying Developer Reading Behavior on Stack Overflow 
                      during API Summarization Tasks.&quot;
                      in <span class="paper">Proceedings 
                      of the 27th International Conference on Software Analysis, 
                      Evolution, and Reenginering (SANER 2020).</span>
                      London, Ontario, Canada, February 2020.<br/>
                      Available: https://doi.org/10.1109/SANER48275.2020.9054848<br/></li>
                      
                    </ol>
                  </dd>
                </dl> */}
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment className="s">
                  s
                  <Workshops />
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column><Segment className="t">t</Segment></Grid.Column>
            </Grid.Row>
          </Grid>

          
        </Container>
      </Router>
    );
  }
}

export default App;
