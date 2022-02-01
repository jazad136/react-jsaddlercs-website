import React, { Component} from 'react';
import { Grid } from 'semantic-ui-react';
import IconBunchFrontend from './IconBunchFrontend';

export class FrontendInterest extends Component {
  render() {
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          <p>The exercise of designing a website that is both impressive, understandable, and expressive is both captivating and fun.</p>
          <p>I design websites currently using <strong>SemanticUI</strong> and <strong>React</strong>. I have <strong>JQuery</strong> to thank for giving me the start I need, as well as professional experiences using <strong>Bootstrap</strong> and <strong>Ember</strong> push me to dive in deeper into this vast field of opportunity. </p>
        </Grid.Column>
        <Grid.Column><IconBunchFrontend/></Grid.Column>
      </Grid.Row>
    )
  }
}

export default FrontendInterest;
