import React from 'react';
import { Grid } from 'semantic-ui-react';
import IconBunchBackend from './IconBunchBackend';

export const BackendInterest = () => {
  return (

  <Grid.Row columns={2}>
    <Grid.Column>
        <p>Not too far from my passion for research stands the desire to take what I know about system design and apply it to what I do in web.</p>
        <p>I've built lots of apps offline in <strong>Java</strong>, <strong>C#</strong>, and even <strong>Python</strong>, and I hook them into <strong>Postgres and MySQL</strong> databases via sites built using <strong>Spring</strong> and <strong>.NET Framework</strong>, with a growing interest in working with Django. I seek to gain more experience in this area. Contact me if you're hiring!</p>
    </Grid.Column>
    <Grid.Column><IconBunchBackend/></Grid.Column>
  </Grid.Row>
  );
};

export default BackendInterest;