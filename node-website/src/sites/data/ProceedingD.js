import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {List, Segment, Icon} from 'semantic-ui-react'
export const ProceedingD = (props) => {
  
  
  const getAvailableLink = (paperDoi) => { 
    if(paperDoi) { 
      const fullLink = `https://doi.org/${paperDoi}`
      return (
        <Fragment>
          Link to paper: <a href={fullLink}><Icon name="file alternate"/></a>
        </Fragment>
      );
    }
    else {
      return '';
    }
  }
  const getPreprintLink = (preprint) => { 
    if(preprint) { 
      return (
        <Fragment>
          Preprint: <a href={preprint}><Icon name="file outline"/></a>
        </Fragment>
      ) 
    }
    else{
      return ""
    }
  }

  return (
    <List.Item>
      <Segment>
        {props.children}<br/>
        {getPreprintLink(props.preprint)}&nbsp;
        {getAvailableLink(props.paperDoi)}
      </Segment>
    </List.Item>
  );
};
ProceedingD.propTypes = {
  preprint: PropTypes.string,
  paperDoi: PropTypes.string
}
export default ProceedingD;

