import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
        <div className="container">
            <nav className="navBar bg-primary">
              <h1 className="a">
                Jonathan Saddler, Ph. D.
              </h1>
              <ul class="bc-container">
                <li class="b"><Link to="/">Home</Link></li>
                <li class="c1"><Link to="#">Research</Link></li>
                <li class="c2"><Link to="#">Projects</Link></li>
                <li class="c3"><Link to="#">Teaching</Link></li>
              </ul>
            </nav>
        </div>
        )
    }
}

export default Navbar
