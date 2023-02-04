/* eslint-disable max-len */
import React from 'react';
import Greetings from './Greetings';
// import Image from '../../assets/images/myImage.jpg';

const HomePage = () => (
  <div className="container-fluid homepage">
    <Greetings />
    <div className="home-card">
      <div className="opening-text">
        <h2 className="fw-bold home-title">
          I&apos;m
          <span className="ms-3 name">
            David Kasilia
          </span>
          <br />
          A Full Stack Web Developer,
          <br />
          Associate Android Developer,
          <br />
          & A Graffiti Artist
        </h2>
      </div>
    </div>
  </div>
);

export default HomePage;

// {/* <img src={Image} className="img-fluid rounded-start profile" alt="David Kasilia Profile" /> */}
// {/* <div className="col-md-8">
// <div className="card-body home-card-body">
//   <p className="card-text ms-5 fs-3 mt-3 fw-semibold text-white">
//     Full Stack Web Developer,
//     <br />
//     Associate Android Developer,
//     <br />
//     & Graffiti Artist
//   </p>
//   <p className="card-text ms-5">
//     <small className=" fs-6 fw-semibold text-white">
//       With Passion For:
//       <br />
//       Creating High Quality UI & Great UX Websites & Android Applications
//     </small>
//   </p>
// </div>
// </div> */}
