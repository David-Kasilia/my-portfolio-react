import React from 'react';
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
      </div>
    </div>
  </div>
);

export default HomePage;
