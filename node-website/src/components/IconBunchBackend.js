import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react'
import '../css/writeup.css'
export class IconBunchBackend extends Component {
  render() {
    return (
    <div>
        <div className="bunch-icon"><Icon name='firefox' size='huge'/></div>
        <div className="bunch-icon">
          <Icon name='python' size='huge'/>
        </div>
        <div className="bunch-icon">
          <Icon name='js square' size='huge'/>
        </div>
        <div className="bunch-icon">
          <Icon name='github' size='huge'/>
        </div>
        
    </div>
    );
  }
}

export default IconBunchBackend;
