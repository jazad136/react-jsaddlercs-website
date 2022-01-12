import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
          <nav className="container navBar">
            <div className="a">
              <h1>
                Jonathan Saddler, Ph. D.
              </h1>
            </div>
            <ul class="bc-container">
              <li class="b"><Link to="/">Home</Link></li>
              <li class="c1"><Link to="#">Research</Link></li>
              <li class="c2"><Link to="#">Projects</Link></li>
              <li class="c3"><Link to="#">Teaching</Link></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar
