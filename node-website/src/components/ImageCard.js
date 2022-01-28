import React, { Component } from 'react'
import {Grid, Button, Card, Image} from 'semantic-ui-react';
import "../css/ImageCard.css";
import cv_pdf from '../images/homepage-img/JSaddler_CV.pdf';
import resume_pdf from '../images/homepage-img/JSaddler_Resume.pdf';
import SelfPic from "../images/homepage-img/SelfPicLin_Reduced.jpg"
export class ImageCard extends Component {
    render() { 
    return (
          <Card color="blue">
              <Image src={SelfPic} circular />
              <Card.Content textAlign='center'>
                <Grid columns={2}>
                  <Grid.Column><div className="g1">
                    <Button basic href={cv_pdf}>CV</Button>
                  </div></Grid.Column>
                  <Grid.Column><div className="g2">
                    <Button basic href={resume_pdf}>Resume</Button>
                  </div></Grid.Column>
                </Grid>
              </Card.Content>
              <Card.Content>
                  <Card.Meta textAlign='center'>Social Links</Card.Meta>
                  <Grid columns={2}>
                  <Grid.Column textAlign='left'>
                    <Button basic className="e1-1">
                      <a href="https://www.linkedin.com/in/jonathan-a-saddler/">
                        LinkedIn</a></Button>
                  </Grid.Column>
                  
                  

                  <Grid.Column>
                  <Button basic className="e1-2">
                      <a href="https://www.github.com/jazad136/">
                        GitHub</a></Button>
                  </Grid.Column>

                  <Grid.Column>
                    <Button basic className="e2-2">
                      <a href="https://twitter.com/Jonasaddler">
                        Twitter</a></Button>
                  </Grid.Column>

                  <Grid.Column textAlign='left'>
                    <Button basic className="e2-1 rg">
                      <a href="https://www.researchgate.net/profile/Jonathan-Saddler">
                        ResearchGate</a></Button>
                  </Grid.Column>
                  </Grid>
                    {/* <div className="g3">
                        <Button basic>
                          <a href="https://www.linkedin.com/in/jonathan-a-saddler/">
                            LinkedIn</a></Button>
                    </div>
                    <div className="g4">
                        <Button basic>
                          <a href="https://www.researchgate.net/profile/Jonathan-Saddler">
                            ResearchGate</a></Button>
                    </div> */}
                    
              </Card.Content>
          </Card>
    );
    }
}

export default ImageCard