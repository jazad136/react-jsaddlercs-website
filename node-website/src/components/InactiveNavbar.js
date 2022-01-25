import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const InactiveNavbar = ({icon, title}) => { 
    return (
        <nav className="navbar bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )    
}

InactiveNavbar.defaultProps = {
    title : 'Jonathan A. Saddler'
}
InactiveNavbar.propTypes = {
    title: PropTypes.string.isRequired
}
export default InactiveNavbar
