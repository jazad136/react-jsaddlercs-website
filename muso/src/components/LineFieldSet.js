import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Segment} from 'semantic-ui-react';

export class LineFieldSet extends Component {
  static propTypes = {
    lineNum: PropTypes.number.isRequired, 
    classStub: PropTypes.string.isRequired
  }
  render() {
    const {lineNum, classStub} = this.props;
    return (
    <Grid columns={3}>
      <Grid.Row>
          <Grid.Column>
            <div className="b1">USE</div>
          </Grid.Column>
          <Grid.Column>
            <div className="b1-2">Line {lineNum}</div>
          </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column><Segment className="b2">
          <div>{classStub}2</div>
          <input type="text"/>
        </Segment></Grid.Column>
        <Grid.Column><Segment className="b2-2">{classStub}2-2</Segment></Grid.Column>
        <Grid.Column><Segment className="b2-3">{classStub}2-3</Segment></Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}

export default LineFieldSet;
