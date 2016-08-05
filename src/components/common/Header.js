import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = (props) => {
    return(
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {" | "}
        <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      </nav>
    );
};


export default Header;
