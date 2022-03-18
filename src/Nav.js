import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChartLine,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <nav>
        <div className="logo">Focus</div>
        <div className="links">
          <div className="square">
            <FontAwesomeIcon className="icon" icon={faCoffee} />
          </div>
          <div className="square">
            <FontAwesomeIcon className="icon" icon={faChartLine} />
          </div>
          <div className="square">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </div>
        </div>
    </nav>
  );
}

export default Nav;
