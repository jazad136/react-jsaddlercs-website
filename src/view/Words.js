import React, { Component } from 'react'

export class Words extends Component {
    render() {
        return (
            <div>
                {this.props.word}
            </div>
        )
    }
}

export default Words
