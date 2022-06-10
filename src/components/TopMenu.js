import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/platenbox-logo_favicon.png';
import '../stylesheet/TopMenu.css'

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-box">
          <img src={logo} style={{ height: 35, width:35 }} alt="Platenbox-icon"/>
          <h4>Platenbox.nl</h4>
        </div>

        <div className="pages-box">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
            </li>

            <li>
              <NavLink to="/library" activeClassName="active-link">Platenbox</NavLink>
            </li>

            <li>
              <NavLink to="/search" activeClassName="active-link">Zoeken</NavLink>
            </li>

            <li>
              <NavLink to="/login" activeClassName="active-link" style={{
                borderStyle: "solid",
                borderWidth: '2px',
                borderColor: '#F30342',
                borderRadius: '10px',
                padding: 5
              }}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;