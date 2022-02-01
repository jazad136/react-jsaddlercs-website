import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Grid, Segment} from 'semantic-ui-react'
export class InterestHeaderSet extends Component {
  
  static propTypes = {
    first = PropTypes.bool,
    second = PropTypes.bool
  }
  getInterestSet = (first) => { 
    if(first) { 
      return  (
      <Fragment>
        <Grid.Column>
          <Segment textAlign='center' className='intHeader'>
            <h3>Frontend</h3>
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment textAlign='center' className='intHeader'>
              <h3>Backend</h3>
            </Segment>
        </Grid.Column>
       </Fragment>
       );
       }
       else {
         return (
         <Fragment>
          <Grid.Column>
            <Segment textAlign='center' className='intHeader'>
              <h3>Frontend</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column>
              <Segment textAlign='center' className='intHeader'>
                <h3>Backend</h3>
              </Segment>
          </Grid.Column>
        </Fragment>
        );
      }
  }
  render() {
    const {first} = this.props;
    return (
      <Grid columns={3}>
        {getInterestSet(first)}
      </Grid>
    );
  }
}

export default InterestHeaderSet;
