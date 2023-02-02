import React from 'react';
import {
  FaTwitter, FaGithub, FaPinterest, FaYoutube, FaLinkedin, FaInstagram,
} from 'react-icons/fa';
import Image from '../../assets/images/myImage.jpg';

const HomePage = () => (
  <div className="container-fluid homepage">
    <div className="card mb-3 home-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Image} className="img-fluid rounded-start" alt="David Kasilia Profile" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title ms-5 fs-1 fw-bold text-white">DAVID KASILIA MWANZIA</h5>
            <p className="card-text ms-5 fs-3 mt-3 fw-semibold text-white">
              Full Stack Web Developer,
              <br />
              Associate Android Developer,
              <br />
              & Graffiti Artist
            </p>
            <p className="card-text"><small className=" fs-5fw-semibold text-white">With Passion For Creating High Quality UI & Great UX Websites & Android Applications</small></p>
          </div>
        </div>
        <div className="card-footer text-muted">
          <div className="d-flex me-5 ms-5">
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaTwitter className="fa-brands text-white fs-4" />
            </a>
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaGithub className="fa-brands text-white fs-4" />
            </a>
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaYoutube className="fa-brands text-white fs-4" />
            </a>
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaLinkedin className="fa-brands text-white fs-4" />
            </a>
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaPinterest className="fa-brands text-white fs-4" />
            </a>
            <a href="/socials" className="list-group-item list-group-item-action">
              <FaInstagram className="fa-brands text-white fs-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default HomePage;
