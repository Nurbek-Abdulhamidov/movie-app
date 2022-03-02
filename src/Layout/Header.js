import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper header_nav #e65100 orange darken-4">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
