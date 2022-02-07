import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import {BrowserRouter as Link} from 'react-router-dom';
export class MenuBar extends Component {
    render() { 
      return (
        <Grid stackable columns={2} className="menuBar">
          <Grid.Row>
            <Grid.Column width={6}>
              <Segment color="black" className="a">
                <h3>Jonathan A. Saddler</h3>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid columns={4} >
                <Grid.Column className="topMenu">
                  {/* <Button>Home</Button> */}
                  <Segment color='black'><Link to="/">Home</Link></Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment color='black'><Link to="/data">Data</Link></Segment>
                </Grid.Column>
                <Grid.Column></Grid.Column>
                <Grid.Column textAlign="center">
                  <Segment basic className="c4 pubsLink">
                    <h3><a href="#pubs"><span className="small">Show me the</span><br/>Pubs!</a></h3>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
}

export default MenuBar;
