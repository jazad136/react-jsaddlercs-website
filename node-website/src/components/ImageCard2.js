import React, { Component } from 'react';
import { Grid, Image, Button, Segment, Icon} from 'semantic-ui-react';
import selfPic from "../images/homepage-img/SelfPicLin_cr.jpg"
import cvPdf from '../images/homepage-img/JSaddler_CV_Web.pdf';
import resumePdf from '../images/homepage-img/JS_Resume_Web.pdf';
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
                  <h5 style={{marginTop: "-10px"}}>
                    I'm on the job market
                  </h5>
                </Grid.Column>
              </Grid>
              <Grid columns={2} textAlign='center'>
                <Grid.Column>
                  <Button color="facebook">
                    <Icon color="github" name="github"/>
                    <a className="iconLink" href="https://www.github.com/jazad136/">
                      GitHub</a>
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button color="linkedin">
                    <Icon color='white' name='linkedin'/>
                    <a className="iconLink"
                    href="https://www.linkedin.com/in/jonathan-a-saddler/">
                      LinkedIn</a>
                  </Button>
                </Grid.Column>
                <Grid.Column>
                    {/* <button className="ui twitter button"> */}
                      {/* <i className="twitter icon"/> */}
                      {/* <a style={{color: 'white'}} */}
                  <Button basic color="blue">
                    <Icon color="blue" name="twitter"/>
                      <a 
                      href="https://twitter.com/Jonasaddler">
                        Twitter</a>
                    {/* </button> */}
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic color='blue' className='rg'>
                    <a 
                    href="https://www.researchgate.net/profile/Jonathan-Saddler">
                    ResearchGate</a>
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
