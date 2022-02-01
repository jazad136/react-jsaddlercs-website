import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// eslint-disable-next-line
import { SaddlerEFSAinputs } from './tables/SaddlerEFSAinputs';
import {Grid, Segment, Container} from 'semantic-ui-react'
import ConferencesD from './components/ConferencesD';
export class App extends Component {


  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => (
          <Container>
            <Grid columns={1}>
              <Grid.Column>
                <Grid columns={2}>
                  <Grid.Column className="a">
                    <Segment>
                    <h2>Data</h2>
                    <p>A listing of extra content from published 
                      work from myself and colleagues</p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column className="b">
                    <Segment>
                    b
                    {/* Follow in our Footsteps */}
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column className="c">
                <Segment>
                    <ConferencesD />
                </Segment>            
           </Grid.Column>
         </Grid>    
         </Container>
        )}/>
      </Switch>
    </Router>
    )
  }
}

export default App;
