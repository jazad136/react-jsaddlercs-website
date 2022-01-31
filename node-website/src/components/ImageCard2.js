import React, { Component } from 'react';
import { Grid, Image, Button, Segment} from 'semantic-ui-react';
import selfPic from "../images/homepage-img/SelfPicBlue_Reduced.jpg"
import cvPdf from '../images/homepage-img/JSaddler_CV.pdf';
import resumePdf from '../images/homepage-img/JSaddler_Resume.pdf';
import "../css/ImageCard.css";
export class ImageCard2 extends Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Segment textAlign='center' className="e">
              <Image size='medium' circular src={selfPic}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment className="f">
              <Grid columns={2}>
                <Grid.Row textAlign='center'>
                  <Grid.Column><Button basic href={cvPdf}>CV</Button></Grid.Column>
                  <Grid.Column><Button basic href={resumePdf}>Resume</Button></Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={1}>
                <Grid.Column className='jobm'>
                  <h3>
                    I'm on the Job Market
                  </h3>
                </Grid.Column>
              </Grid>
              <Grid columns={2} textAlign='center'>
                <Grid.Column>
                  <Button basic>
                    GitHub
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic>
                    LinkedIn
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic>
                    Twitter
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic className='rg'>
                    ResearchGate
                  </Button>
                </Grid.Column>

              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ImageCard2;
