import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIconClose from "../icons/menu-icon-close.svg";
import MenuIconOpen from "../icons/menu-icon-open.svg";

function Nav() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleNav = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/"> Bloopy </Link>
      </div>
      <div className="nav">
        <div className="menu-icon" onClick={toggleNav}>
          {isDisplayed ? (
            <img src={MenuIconOpen} className="toilet-bowl-icon" />
          ) : (
            <img src={MenuIconClose} className="toilet-bowl-icon" />
          )}
        </div>

        <div className={isDisplayed ? "showMenu" : "hideMenu"}>
          <ul>
            <li className="active">
              <Link to="/about">About Bloopy</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

// function Nav() {
//   const [isDisplayed, setIsDisplayed] = useState(false);

//   return (
//     <div className={isDisplayed ? "displayNav" : "hideNav"}>
//       <nav className="nav">
//         <Link to="/" className="logo">
//           Bloopy
//         </Link>
//         <ul>
//           <li className="active">
//             <Link to="/about">About Bloopy</Link>
//           </li>
//           <li>
//             <Link to="/how-it-works">How it works</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

export default Nav;
