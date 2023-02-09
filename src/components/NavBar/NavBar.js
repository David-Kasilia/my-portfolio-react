/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaGithub, FaPinterest, FaYoutube, FaLinkedin, FaInstagram, FaCodepen,
  FaDribbble, FaStackOverflow, FaBehance, FaMedium, FaDev,
} from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

const NavBar = () => (
  <div className="nav-side-bar">
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 nav-container">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
            <img className="logo" src={Logo} alt="Logo rental call" />
            <div className="container-fluid nav-link mb-1">
              <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-5 d-none d-sm-inline ms-5 mt-2 fw-bold">HOME</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink to="/projects" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-5 d-none d-sm-inline ms-5 fw-bold">PROJECTS</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink to="/skills" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-5 d-none d-sm-inline ms-5 fw-bold">SKILLS</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink to="/about" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-5 d-none d-sm-inline ms-5 fw-bold">ABOUT ME</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink to="/contact" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-5 d-none d-sm-inline ms-5 fw-bold">CONTACT ME</span>
              </NavLink>
            </div>
            <div className="socials">
              <div className="d-flex icons">
                <a href="https://twitter.com/davidkasilia" className="icon-link" target="_blank">
                  <FaTwitter className="fa-brands  fs-4" />
                </a>
                <a href="https://github.com/David-Kasilia" className="icon-link" target="_blank">
                  <FaGithub className="fa-brands fs-4" />
                </a>
                <a href="https://www.youtube.com/@kasiliacreations" className="icon-link" target="_blank">
                  <FaYoutube className="fa-brands  fs-4" />
                </a>
                <a href="https://linkedin.com/in/david-kasilia" className="icon-link" target="_blank">
                  <FaLinkedin className="fa-brands  fs-4" />
                </a>
                <a href="https://medium.com/@davidkasilia001" className="icon-link" target="_blank">
                  <FaMedium className="fa-brands  fs-4" />
                </a>
                <a href="https://stackoverflow.com/users/15810668" className="icon-link" target="_blank">
                  <FaStackOverflow className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://www.pinterest.com/David_Kasilia/" className="icon-link" target="_blank">
                  <FaPinterest className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://instagram.com/kasiliadavid" className="icon-link" target="_blank">
                  <FaInstagram className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://codepen.io/videlishious" className="icon-link" target="_blank">
                  <FaCodepen className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://www.behance.net/davidkasilia" className="icon-link" target="_blank">
                  <FaBehance className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://dribbble.com/Kasilia254" className="icon-link" target="_blank">
                  <FaDribbble className="fa-brands  fs-4 icon-2" />
                </a>
                <a href="https://dev.to/@davidkasilia" className="icon-link" target="_blank">
                  <FaDev className="fa-brands fs-4 icon-2" />
                </a>
              </div>
            </div>
            <div className="container mt-4 ms-2">
              <h6 className="fa-text fw-bold text-white">
                &copy; 2023 KASILIA CREATIONS
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
