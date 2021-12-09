import React from 'react';
import { Link } from 'react-dom';

const Navbar = ({user}) => {
  return (<div>
    <h2>Stranger's Things</h2>

    {user ?
      <div id="links">

        <Link to="/home">HOME</Link>
        <Link to="/home">POSTS</Link>
        {/* <Link to="/home">LOGIN</Link> */}
      </div>
      :
      <div id="links">
    <Link to="/home">HOME</Link>
      <Link to="/home">POSTS</Link>
      <Link to="/home">LOGIN</Link>
      </div>
    }
  </div>
  )
};

export default Navbar;