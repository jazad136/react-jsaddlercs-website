import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {List, Segment, Icon} from 'semantic-ui-react'
export const ConferenceD = (props) => {
  
  
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
  const getTablesLinks = (tables) => {
    if(tables.length == 0) 
    { 
      return null; 
    } 
    return (<List >
      {tables.map(table => (
        <List.Item as='li'>
          <a href={table.importName}>
            {table.displayName}
          </a>
        </List.Item>
      ))}
    </List>)
      
    
  }

  return (
    <List.Item>
      <Segment>
        {props.children}<br/>
        {getPreprintLink(props.preprint)}&nbsp;
        {getAvailableLink(props.paperDoi)}&nbsp;
        {getTablesLinks(props.csvTables)}
      </Segment>
    </List.Item>
  );
};
ConferenceD.propTypes = {
  preprint: PropTypes.string,
  paperDoi: PropTypes.string
}
export default ConferenceD;

