import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer #e65100 orange darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Movie
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;