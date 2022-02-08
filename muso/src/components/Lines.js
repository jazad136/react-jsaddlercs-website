import React, { Component } from 'react';

export class Lines extends Component {
  
  state = {text1: '', text2 : '', text3 : ''}

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
  
  processText() { 
    this.props.processText([this.state.text1, this.state.text2, this.state.text3])
  }
  onSendSubmit = (e) => { 
    toSend = []
    if(this.state.text1) { 
      toSend.push(this.state.text1)
    }
    if(this.state.text2) { 
      toSend.push(this.state.text2)
    }
    if(this.state.text3) { 
      toSend.push(this.state.text3)
    }
    // I need some way to pass down processText as a function that takes a list. 
    // and attempts to send each list as an axios request. 
    // what will each return? 
    this.props.processText(toSend)
  }
  render() {
    const multiLine = [
      <LineFieldSet lineNum={1} classStub='b' text={this.state.text1}/>,
      <LineFieldSet lineNum={2} classStub='c' text={this.state.text2}/>,
      <LineFieldSet lineNum={3} classStub='d' text={this.state.text3}/>
    ]
    return (
      <Grid columns={2}>
          <Segment className='a'>
            <input 
              type='submit' 
              onSubmit={this.onSendSubmit} 
              value='Send'/>
          </Segment>)
          {multiLine[0]}
          {this.Breaker()}
          {this.EmptyLeftCol()}
          {multiLine[1]}
          {this.Breaker()}
          {this.EmptyLeftCol()}
          {multiLine[2]}
      </Grid>
    );
  }
}

export default Lines;
