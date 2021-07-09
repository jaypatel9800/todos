import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const styles = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/" style={styles}>
          <h1>Logo</h1>
        </Link>
        <ul>
          <Link to="/about" style={styles}>
            <li>About</li>
          </Link>
          <Link to="/shop" style={styles}>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
