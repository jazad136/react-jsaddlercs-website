import React, { Component, Fragment } from 'react';
import {Grid, Segment} from 'semantic-ui-react'

import ProceedingsD from './ProceedingsD';
export class Data extends Component {
  render() {
    return (
      <Fragment>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Grid.Column className="a">
              <Segment basic>
              <h2>Data</h2>
              <p>Extra content from published 
                  work of myself and colleagues</p>
              </Segment>
            </Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column className="c">
            <Segment>
                <ProceedingsD />
            </Segment>            
          </Grid.Column> 
        </Grid.Row>
      </Fragment>
    );
  }
}

export default Data;
