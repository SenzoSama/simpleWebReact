import React from "react";
import '../App.css'
import {Link} from "react-router-dom";

function Nav()
{
    return (
      <nav>
        <Link className="link-style" to="/">
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link className="link-style" to="/about">
            <li>About</li>
          </Link>

          <Link className="link-style" to="/shop">
            <li>Shop</li>
          </Link>

          <Link className="link-style" to="/material">
            <li>Material</li>
          </Link>
        </ul>
      </nav>
    );
}


export default Nav;