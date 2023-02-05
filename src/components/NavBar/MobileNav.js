import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaGithub, FaPinterest, FaYoutube, FaLinkedin, FaInstagram, FaCodepen,
  FaDribbble, FaStackOverflow, FaBehance, FaMedium, FaDev,
} from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

const MobileNav = () => (
  <div className="mobile-nav-bar">
    <nav className="navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-semibold text-white" id="offcanvasNavbarLabel">WELCOME</h5>
            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <img className="logo" src={Logo} alt="Logo rental call" />
            <ul className="justify-content-end flex-grow-1 p-1 mt-5 mobile-items">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink to="/" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">HOME</span>
                </NavLink>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink to="/projects" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">PROJECTS</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                <NavLink to="/skills" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">SKILLS</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                <NavLink to="/about" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">ABOUT ME</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
                <NavLink to="/contact" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">CONTACT ME</span>
                </NavLink>
              </li>
            </ul>

            <div className="socials">
              <div className="d-flex icons">
                <a href="https://twitter.com/davidkasilia" className="icon-link">
                  <FaTwitter className="fa-brands  fs-4" />
                </a>
                <a href="https://github.com/David-Kasilia" className="icon-link">
                  <FaGithub className="fa-brands fs-4" />
                </a>
                <a href="https://www.youtube.com/@kasiliacreations" className="icon-link">
                  <FaYoutube className="fa-brands  fs-4" />
                </a>
                <a href="https://linkedin.com/in/david-kasilia" className="icon-link">
                  <FaLinkedin className="fa-brands  fs-4" />
                </a>
                <a href="https://medium.com/@davidkasilia001" className="icon-link">
                  <FaMedium className="fa-brands  fs-4" />
                </a>
                <a href="https://stackoverflow.com/users/15810668" className="icon-link">
                  <FaStackOverflow className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://www.pinterest.com/David_Kasilia/" className="icon-link">
                  <FaPinterest className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://instagram.com/kasiliadavid" className="icon-link">
                  <FaInstagram className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://codepen.io/videlishious" className="icon-link">
                  <FaCodepen className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://www.behance.net/davidkasilia" className="icon-link">
                  <FaBehance className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://dribbble.com/Kasilia254" className="icon-link">
                  <FaDribbble className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://dev.to/@davidkasilia" className="icon-link">
                  <FaDev className="fa-brands fs-4 icon-2" />
                </a>
              </div>
            </div>

            <div className="container mt-5">
              <h6 className="fa-text fw-bold text-white">
                &copy; 2023 KASILIA CREATIONS
              </h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default MobileNav;
