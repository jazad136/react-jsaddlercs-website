import React, {Component, Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Grid, Segment, Container} from 'semantic-ui-react';
import WebFont from 'webfontloader';
import Data from './sites/data/Data'
// import {BrowserRouter as Switch, Route} from 'react-router-dom';
// images and navbars - temporarily disabled. 
// eslint-disable-next-line
import SelfPic from './images/homepage-img/SelfPicHome_Reduced.jpg';

//import Navbar from './Navbar'
import Conferences from './components/Conferences'
import Workshops from './components/Workshops';
import ImageCard from './components/ImageCard2';
// eslint-disable-next-line
import NameplateSplash from './components/NameplateSplash2';
import IconBunchBackend from './components/IconBunchBackend';
import { IconBunchFrontend } from './components/IconBunchFrontend';
class App extends Component { 
  constructor() {  
    super()   
    WebFont.load({
        google: {
            families: [
              'Oswald: 400, 400italic, 700',
              'Raleway: 400, 400italic, 700',
              'Droid Sans: 400, 400italic, 700']
        }
    })
  }
  // thanks goes out to https://www.section.io/engineering-education/transitioning-from-bootstrap-to-semantic-ui-react/
  // for a tutorial on transitioning from bootstrap to react
  // Remember https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1
  // for how to deploy using relative links. 
  // remember to update updated link from old static website. 

  MenuBar() { 
    return (
      <Grid.Row>
        <Grid.Column width={6}>
          <Segment color="black" className="a">
            <h3>Jonathan A. Saddler</h3></Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid columns={4}>
            <Grid.Column>
              <Segment className="b"><Link to="/">Home</Link></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="c1"><Link to="/data/">Data</Link></Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column textAlign="center">
              <Segment basic className="c4 pubsLink">
                <h3><a href="#pubs">Show me the Pubs!</a></h3>
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    );
  }
  render() { 
    return (
      <Router>
        <Container className="focus-content">
          <Grid stackable columns={2}>
            {this.MenuBar()}
            <Switch>
              <Route exact path="/" render={(props) => (
                <Fragment>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <ImageCard />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <NameplateSplash />
                    <div className='missing' style={{fontStyle: 'italic', textAlign: 'center'}}>
                    <h3>Looking for more information? Something missing?</h3>
                    <div>This react website was released Jan 31, 2022</div>
                    <div>You can still access content from the <a href="http://saddlercoms.net/static-html">old website</a> until we get all fixed up here.</div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                {/* grid rows k l m*/}
              {/* <Grid.Row>
                <Grid.Column width={6}>
                  <Segment className="k">
                    <Segment className="k1">Most Recent Appointment</Segment>
                    <div className="k2">Teaching Asst.</div>
                    <div className="k3">Professor of</div>
                    <div className="k4">Computer Science</div>
                    East Carolina University
                  </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Grid columns="2">
                    <Grid.Column><Segment className="L1">L1</Segment></Grid.Column>
                    <Grid.Column><Segment className="L2">L2</Segment></Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid.Row> */}
              {/* grid rows n o p*/}
              {/* <Grid.Row columns={1}>
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
              </Grid.Row> */}
              {/* row q Interests */}
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Segment basic textAlign='center' className="q1">
                    <h3>Interests</h3>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Grid columns={3}>
                    <Grid.Column>
                      <Segment textAlign='center' className="q2-1">
                        <h3>Software Engineering</h3>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment textAlign='center' className="q2-2">
                        <h3>Program Comprehension</h3>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment textAlign='center' className="q2-3">
                        <h3>Eyetracking</h3>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
              {/* Publications */}
              <Grid.Row columns={1}>
                <Grid.Column>
                <a href="#pubs" name="pubs" id="pubs" style={{color: "black"}}><Segment vertical></Segment></a> 
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Segment className="r">
                    <Conferences />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Segment className="s">
                    <Workshops />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Segment className="t"></Segment>
                </Grid.Column>
              </Grid.Row>
              </Fragment>
              )}/>
              <Route exact path='/data' render={(props) => (
                <Data/>
              )}/> 
            </Switch>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;
