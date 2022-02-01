import React from 'react';
import { Grid } from 'semantic-ui-react';
import IconBunchBackend from './IconBunchBackend';

export const BackendInterest = () => {
  return (

  <Grid.Row columns={2}>
    <Grid.Column>
        <p>Backend designs are a challenge I was first to pick up on in web. Not too far from my research passion lies the desire to take what I've learned about decoupled class design and apply it to what I do in web.</p>
        <p>I've built lots of apps offline in Java, C#, and even Python, and I hook them into Postgres and MySQL databases via sites built using Spring and .NET framework, with a growing interest in working with Django. I need more experience in this area, so contact me if you're hiring!</p>
    </Grid.Column>
    <Grid.Column><IconBunchBackend/></Grid.Column>
  </Grid.Row>
  );
};

export default BackendInterest;