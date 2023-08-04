import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <ul>
          <li>
            <Link to="/about">About Toiletto</Link>
          </li>
          <li>
            <Link to="/how">Design Considerations</Link>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;
