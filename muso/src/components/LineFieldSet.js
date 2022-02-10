import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';
import '../css/LineFieldSet.css'

export class LineFieldSet extends Component {
  state = {tokens : ''}
  static propTypes = {
    lineNum: PropTypes.number.isRequired, 
    classStub: PropTypes.string.isRequired,
    setLine: PropTypes.func.isRequired
  }

  onChange = (e) => { 
    const theContent = e.target.value
    this.setState({[e.target.name] : theContent});
    const theLine = this.props.lineNum;
    this.props.setLine(theLine, theContent)
  }
  render() {
    const {lineNum, classStub} = this.props;
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={1} textAlign='right'>
            <div className={`${classStub}1`}>

              <span className='letterbox-display'>{classStub}1<br/></span>
              
              <strong>USE</strong>

            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div className={`${classStub}1-2`}>
              
              <span className="letterbox-display">{classStub}1-2<br/></span>
              
              <strong>Line {lineNum}</strong>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className={`${classStub}1-3`}>
                <span className="letterbox-display">{classStub}1-3<br/></span>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} textAlign='right'>
            <div className={`${classStub}2`}>
                
                <span className="letterbox-display">{classStub}2<br/></span>
                
                <input 
                  type="checkbox" 
                  id={`useline-${classStub}`}/>
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div className={`${classStub}2-2`}>
              <span className="letterbox-display">{classStub}2-2</span>
            </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <div className={`${classStub}2-3`}>
              <span className="letterbox-display">{classStub}2-3<br/></span>
              <input 
                className={`tokens-${classStub}`}
                type="text" 
                name="tokens"
                onChange={this.onChange}/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LineFieldSet;
