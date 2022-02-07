import React, { Component } from 'react';

export class MenuBarOld extends Component {
  render() { 
    return (
      <Segment inverted>
      <Grid stackable columns={2} className='menuBar'>
        <Grid.Row>
          <Grid.Column width={6}>
            <div className='topNameplate'><h3>Jonathan A. Saddler</h3></div>
          </Grid.Column>
          <Grid.Column width={10}>
            <List className='topMenu' horizontal link relaxed size={'large'}>
              <List.Item className="tmItem">
                <Button color='blue'><Link to="/">Home</Link></Button>
              </List.Item>
              <List.Item className="tmItem"><Link to="/data">Data</Link></List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>  
      </Grid>
      </Segment>
    );
  }
}

export default MenuBarOld;
