import React, { Component } from 'react'

export class TextFieldUpdate extends Component {
    state = {
        text: ''
    } 
    onChange = (e) => { 
        this.setState( {[e.target.name]: e.target.value});
        
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text" placeholder="Type here"
                    onChange={this.onChange}
                    ></input>
                    <input type="submit" name="calc"/>
                    <input type="text" name="out"/>
                </form>
            </div>
        )
    }
}

export default TextFieldUpdate
