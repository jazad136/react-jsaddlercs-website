import React, { Component } from 'react';
import { Grid, Image, Button, Segment} from 'semantic-ui-react';
import selfPic from "../images/homepage-img/SelfPicBlue_cr.jpg"
import cvPdf from '../images/homepage-img/JSaddler_CV.pdf';
import resumePdf from '../images/homepage-img/JSaddler_Resume.pdf';
import "../css/ImageCard.css";
export class ImageCard2 extends Component {
  render() {
    return (
      <Segment>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <div className="selfPic">
              <Image bordered circular src={selfPic}/>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <div className="f">
              <Grid columns={2}>
                <Grid.Row textAlign='center'>
                  <Grid.Column className="f1 cv-btn" textAlign='center'>
                    <Button basic color="black" href={cvPdf}>CV</Button></Grid.Column>
                  <Grid.Column className="f1 resume-btn" textAlign='center'>
                    <Button basic color="black" href={resumePdf}>Resume</Button></Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={1}>
                <Grid.Column className='jobm'>
                  <h4 style={{marginTop: "-10px"}}>
                    I'm on the Job Market
                  </h4>
                </Grid.Column>
              </Grid>
              <Grid columns={2} textAlign='center'>
                <Grid.Column>
                  <Button basic color="blue">
                    GitHub
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic color="blue">
                    LinkedIn
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic color="blue">
                    Twitter
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic color="blue" className='rg'>
                    ResearchGate
                  </Button>
                </Grid.Column>

              </Grid>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
    );
  }
}

export default ImageCard2;
