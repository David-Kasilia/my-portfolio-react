import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const NavBar = () => (
  <div className="nav-side-bar w-25">
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
            <div className="container mt-5 ms-3">
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
