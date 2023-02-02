import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const MobileNav = () => (
  <div className="mobile-nav-bar overflow-hidden">
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
          <div className="offcanvas-body overflow-hidden">
            <img className="logo" src={Logo} alt="Logo rental call" />
            <ul className="justify-content-end flex-grow-1 p-1 mt-5 mobile-items">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">HOME</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">PROJECTS</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/skills" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">SKILLS</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/about" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">ABOUT ME</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/contact" className="nav-link text-decoration-none">
                  <span className="fs-5 fw-bold text-white mobile-text">CONTACT ME</span>
                </NavLink>
              </li>
            </ul>

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
