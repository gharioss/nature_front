import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header/Header.styled";

const Navbar = () => {
  return (
    <StyledHeader>
      <div className="main_navbar_container">
        <div className="navbar_container">
          <div className="main_navbar">
            <div className="logo_navbar">
              <Link to="/" className="navbar_welcome nav_link">
                MURIEL NAPOLI
              </Link>
            </div>
          </div>

          <div className="secondary_navbar">
            <span className="navbar_small_screens">
              <Link
                to="#"
                className="text-primary site-menu-toggle js-menu-toggle py-5"
              >
                <span className="icon-menu h3 text-white"></span>
              </Link>
            </span>

            <nav className="site-navigation" role="navigation">
              <ul className="site_menu main_menu">
                <li>
                  <Link to="#" className="nav_link navbar_active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav_link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav_link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav_link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav_link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
