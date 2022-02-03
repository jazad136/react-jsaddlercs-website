import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react'

export class IconBunchFrontend extends Component {
  render() {
    return (
    <div>
        <div className="bunch-icon">
          <Icon name='html5' size='huge'/>
        </div>
        <div className="bunch-icon">
          <Icon name='react' size='huge'/>
        </div>
        <div className="bunch-icon">
          <Icon name='ember' size='huge'/>
        </div>
        <div className="bunch-icon">
          <Icon name='node' size='huge'/>
        </div>
    </div>
    );
  }
}

export default IconBunchFrontend;
