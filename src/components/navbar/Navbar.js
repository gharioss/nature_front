import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header/Header.styled";

const Navbar = () => {
  return (
    <StyledHeader>
      <div class="main_navbar_container">
        <div class="navbar_container">
          <div class="main_navbar">
            <div class="logo_navbar">
              <Link to="/" class="navbar_accueil nav_link">
                MURIEL NAPOLI
              </Link>
            </div>
          </div>

          <div class="secondary_navbar">
            <span class="navbar_small_screens">
              <Link
                to="#"
                class="text-primary site-menu-toggle js-menu-toggle py-5"
              >
                <span class="icon-menu h3 text-white"></span>
              </Link>
            </span>

            <nav class="site-navigation" role="navigation">
              <ul class="site_menu main_menu">
                <li>
                  <Link to="#" class="nav_link active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" class="nav_link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="#" class="nav_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" class="nav_link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#" class="nav_link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" class="nav_link">
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
