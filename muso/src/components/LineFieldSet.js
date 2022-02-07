import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';
import '../css/LineFieldSet.css'

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
          <Grid.Column width={1} textAlign='right'>
            {/* <div className="b1">USE</div> */}
            <div className={`${classStub}1`}>
              {classStub}1<br/>
              <strong>USE</strong></div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div className={`${classStub}1-2`}>
              {classStub}1-2<br/>
              <strong>Line {lineNum}</strong></div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className={`${classStub}1-3`}>
                {classStub}1-3<br/>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} textAlign='right'>
            <div className={`${classStub}2`}>
                {classStub}2<br/>
                <input 
                type="checkbox" 
                id={`useline-${classStub}`}/>
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div className={`${classStub}2-2`}>
              {classStub}2-2
            </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <div className={`${classStub}2-3`}>
              {classStub}2-3<br/>
              <input className={`tokens-${classStub}`} type="text" />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LineFieldSet;
