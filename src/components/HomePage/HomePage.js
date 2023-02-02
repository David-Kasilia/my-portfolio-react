import React from 'react';
import {
  FaTwitter, FaGithub, FaPinterest, FaYoutube, FaLinkedin, FaInstagram, FaCodepen,
  FaDribbble, FaStackOverflow, FaBehance, FaMedium, FaDev,
} from 'react-icons/fa';
import Image from '../../assets/images/myImage.jpg';

const HomePage = () => (
  <div className="container-fluid homepage">
    <div className="card mb-3 home-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Image} className="img-fluid rounded-start profile" alt="David Kasilia Profile" />
        </div>
        <div className="col-md-8">
          <div className="card-body home-card-body">
            <h5 className="card-title ms-5 fs-1 fw-bold text-white">DAVID KASILIA MWANZIA</h5>
            <p className="card-text ms-5 fs-3 mt-3 fw-semibold text-white">
              Full Stack Web Developer,
              <br />
              Associate Android Developer,
              <br />
              & Graffiti Artist
            </p>
            <p className="card-text ms-5">
              <small className=" fs-6 fw-semibold text-white">
                With Passion For:
                <br />
                Creating High Quality UI & Great UX Websites & Android Applications
              </small>
            </p>
          </div>
        </div>
        <div className="card-footer text-muted">
          <div className="d-flex me-5 ms-5 icons">
            <a href="https://twitter.com/davidkasilia" className="list-group-item list-group-item-action icon-link">
              <FaTwitter className="fa-brands text-white fs-4" />
            </a>
            <a href="https://github.com/David-Kasilia" className="list-group-item list-group-item-action icon-link">
              <FaGithub className="fa-brands text-white fs-4" />
            </a>
            <a href="https://www.youtube.com/@kasiliacreations" className="list-group-item list-group-item-action icon-link">
              <FaYoutube className="fa-brands text-white fs-4" />
            </a>
            <a href="https://linkedin.com/in/david-kasilia" className="list-group-item list-group-item-action icon-link">
              <FaLinkedin className="fa-brands text-white fs-4" />
            </a>
            <a href="https://medium.com/@davidkasilia001" className="list-group-item list-group-item-action icon-link">
              <FaMedium className="fa-brands text-white fs-4" />
            </a>
            <a href="https://stackoverflow.com/users/15810668" className="list-group-item list-group-item-action">
              <FaStackOverflow className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://www.pinterest.com/David_Kasilia/" className="list-group-item list-group-item-action">
              <FaPinterest className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://instagram.com/@kasiliadavid" className="list-group-item list-group-item-action">
              <FaInstagram className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://codepen.io/@videlishious" className="list-group-item list-group-item-action">
              <FaCodepen className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://www.behance.net/davidkasilia" className="list-group-item list-group-item-action">
              <FaBehance className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://dribbble.com/david%20kasilia" className="list-group-item list-group-item-action">
              <FaDribbble className="fa-brands text-white fs-4 icon-2" />
            </a>
            <a href="https://dev.to/@davidkasilia" className="list-group-item list-group-item-action">
              <FaDev className="fa-brands text-white fs-4 icon-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default HomePage;
