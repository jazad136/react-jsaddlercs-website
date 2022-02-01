import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react'

export class IconBunchFrontend extends Component {
  render() {
    return (
    <div>
        <Icon name='html5' size='huge'/>
        <Icon name='react' size='huge'/>
        <Icon name='ember' size='huge'/>
        <Icon name='node' size='huge'/>
    </div>
    );
  }
}

export default IconBunchFrontend;
