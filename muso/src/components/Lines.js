import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Grid, Segment} from 'semantic-ui-react';
import LineFieldSet from './LineFieldSet';

export class Lines extends Component {
  
  state = {text1: '', text2 : '', text3 : ''}
  static propTypes = {
    setLines : PropTypes.func.isRequired
  }
  Breaker() { 
    return (
      <Fragment>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}><hr/></Grid.Column>
      </Fragment>
    );
  }
  EmptyLeftCol() { 
    return (
      <Grid.Column width={3}></Grid.Column>
    )
  }
  setLine = (lineNum, lineText) => {
    if(lineNum === 3) { 
      this.setState({text3 : lineText}); 
    }
    else if(lineNum === 2) { 
      this.setState({text2 : lineText}); 
    }
    else { 
      this.setState({text1 : lineText}); 
    }
  }

  onSendSubmit = (e) => { 
    // toSend = []
    e.preventDefault()
    const toSend = [this.state.text1, this.state.text2, this.state.text3]
    // if(this.state.text1) { 
    //   toSend.push(this.state.text1)
    // }
    // if(this.state.text2) { 
    //   toSend.push(this.state.text2)
    // }
    // if(this.state.text3) { 
    //   toSend.push(this.state.text3)
    // }
    // I need some way to pass down processText as a function that takes a list. 
    // and attempts to send each list as an axios request. 
    // what will each return? 
    this.props.setLines(toSend)
  }
  render() {
    const multiLine = [
      <LineFieldSet 
        setLine={this.setLine} 
        lineNum={1} 
        classStub='b' 
        text={this.state.text1} 
      />,
      <LineFieldSet 
        setLine={this.setLine} 
        lineNum={2} 
        classStub='c' 
        text={this.state.text2}
      />,
      <LineFieldSet 
        setLine={this.setLine} 
        lineNum={3} 
        classStub='d' 
        text={this.state.text3}
      />
    ]
    return (
      <form onSubmit={this.onSendSubmit}>
      <Grid columns={2}>
        <Grid.Column width={3}>
          <Segment basic className='a'>
            <input 
              type='submit' 
              value='Send'
              onClick={this.onSendSubmit}
              />
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}> {multiLine[0]} </Grid.Column>
        <Grid.Row columns={1}>   {this.Breaker()} </Grid.Row>
        <Grid.Column width={3}>{this.EmptyLeftCol()}</Grid.Column>
        <Grid.Column width={10}>{multiLine[1]}</Grid.Column>  
        <Grid.Row columns={1}>{this.Breaker()}</Grid.Row>
        <Grid.Column width={3}>{this.EmptyLeftCol()}</Grid.Column>  
        <Grid.Column width={10}>{multiLine[2]}</Grid.Column>
      </Grid> 
      </form>
    );
  }
}

export default Lines;
