import React, { Component } from 'react'
import {Grid, Button, Card, Image, Segment} from 'semantic-ui-react';
import "../css/ImageCard.css";
import cv_pdf from '../images/homepage-img/JSaddler_CV.pdf';
import resume_pdf from '../images/homepage-img/JSaddler_Resume.pdf';
import SelfPic from "../images/homepage-img/SelfPicHome_Reduced.jpg"
export class ImageCard extends Component {
    render() { 
    return (
        <Grid.Row>
            <Grid.Column width={6}>
            <div className="d-e">
            d-e
            <Card>
                <Image src={SelfPic} wrapped ui={false}/>
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
                <Card.Content textAlign='center'>
                    
                    <Card.Meta>Social Links</Card.Meta>
                    {/* <Grid columns={1}>
                    <Grid.Column>
                      <Button basic className="g3">
                        <a href="https://www.linkedin.com/in/jonathan-a-saddler/">
                          LinkedIn</a></Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button basic className="g4">
                        <a href="https://www.researchgate.net/profile/Jonathan-Saddler">
                          ResearchGate</a></Button>
                    </Grid.Column>
                    </Grid> */}
                      <div className="g3">
                          <Button basic>
                            <a href="https://www.linkedin.com/in/jonathan-a-saddler/">
                              LinkedIn</a></Button>
                      </div>
                      <div className="g4">
                          <Button basic>
                            <a href="https://www.researchgate.net/profile/Jonathan-Saddler">
                              ResearchGate</a></Button>
                      </div>
                </Card.Content>
            </Card>
            </div>
            </Grid.Column>
                <Segment><h2>Jonathan A. Saddler, Ph. D.</h2></Segment>
            <Grid.Column>

            </Grid.Column>
        </Grid.Row>
    );
    }
}

export default ImageCard