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
  const getTablesLinks = (tables) => {
    if(tables === undefined || tables.length === 0) { 
      return null; 
    } 
    return (
      <Fragment>
      <ul className='paper-tables'>
        {tables.map((table, index) => (
          <List.Item as='li' key={index}>
            <div>
              <Icon name='table' size='small'/>
            </div>
            <div>
              <a href={table.importName}>
                {table.displayName}
              </a>
            </div>
          </List.Item>
        ))}
      </ul>
    </Fragment>) 
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
ProceedingD.propTypes = {
  preprint: PropTypes.string,
  paperDoi: PropTypes.string,
  cavTables: PropTypes.array
}
export default ProceedingD;

