import React, { Component } from 'react'

export class Word extends Component {
    render() {
        return (
            <div>
                {this.props.theText}
            </div>
        )
    }
}

export default Word
