import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {Grid, Segment} from 'semantic-ui-react'
export class InterestHeaderSet extends Component {
  
  static propTypes = {
    frontend : PropTypes.bool.isRequired,
    highlight : PropTypes.bool.isRequired
  }
  getInterestSet(highlight, frontend) {
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
    if(frontend) { 
      return  (
      <Fragment>
        <Grid.Column>
          <Segment color='blue' textAlign='center' className='intHeader'>
            <h3>Frontend Web Development</h3>
          </Segment>
        </Grid.Column>
        {/* <Grid.Column>
            <Segment disabled textAlign='center' className='intHeader'>
              Backend Web Development
            </Segment>
        </Grid.Column> */}
       </Fragment>
       );
      }
      else {
        return (
        <Fragment>
        {/* <Grid.Column>
          <Segment disabled textAlign='center' className='intHeader'>
            Frontend Web Development
          </Segment>
        </Grid.Column> */}
        <Grid.Column>
          <Segment color='blue' textAlign='center' className='intHeader'>
            <h3>Backend Web Development</h3>
          </Segment>
        </Grid.Column>
      </Fragment>
      );
    }
  }
  render() {
    const {highlight, frontend} = this.props;
    return (
      <Fragment>
        {this.getInterestSet(highlight, frontend)}
      </Fragment>
    );
  }
}

export default InterestHeaderSet;
