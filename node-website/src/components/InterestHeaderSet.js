import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {Grid, Segment} from 'semantic-ui-react'
export class InterestHeaderSet extends Component {
  
  static propTypes = {
    first : PropTypes.bool,
    highlight : PropTypes.bool
  }
  getInterestSet(first, highlight) {
    if(!highlight) { 
    return (
      <Fragment>
        <Grid.Column>
          <Segment textAlign='center' className='intHeader'>
            <h3>Frontend Web Development</h3>
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment textAlign='center' className='intHeader'>
              <h3>Backend Web Development</h3>
            </Segment>
        </Grid.Column>
       </Fragment> );
    } 
    if(first) { 
      return  (
      <Fragment>
        <Grid.Column>
          <Segment textAlign='center' className='intHeader'>
            <h3>Frontend Web Development</h3>
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment disabled textAlign='center' className='intHeader'>
              <h3>Backend Web Development</h3>
            </Segment>
        </Grid.Column>
       </Fragment>
       );
       }
       else {
         return (
         <Fragment>
          <Grid.Column>
            <Segment disabled textAlign='center' className='intHeader'>
              <h3>Frontend Web Development</h3>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign='center' className='intHeader'>
              <h3>Backend Web Development</h3>
            </Segment>
          </Grid.Column>
        </Fragment>
        );
      }
  }
  render() {
    const {first} = this.props;
    return (
      <Fragment>
        {this.getInterestSet(first)}
      </Fragment>
    );
  }
}

export default InterestHeaderSet;
