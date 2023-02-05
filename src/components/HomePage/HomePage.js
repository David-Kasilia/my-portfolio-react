/* eslint-disable max-len */
import React from 'react';
import Greetings from './Greetings';
import DownloadResume from './DownloadResume';
import Image from '../../assets/images/myImage.png';

const HomePage = () => (
  <div className="container-fluid homepage">
    <Greetings />
    <div className="home-card">
      <div className="opening-text">
        <div className="name-container">
          <h2 className="fw-bold home-title">
            I&apos;m
            <span className="ms-3 name">
              David Kasilia Mwanzia
            </span>
          </h2>
        </div>
        <div className="wrapper">
          <ul className="dynamic-txts">
            <li>
              <span>
                A Full Stack Web Developer,
              </span>
            </li>
            <li>
              <span>
                An Associate Android Developer,
              </span>
            </li>
            <li>
              <span>
                UI/UX Developer,
              </span>
            </li>
            <li>
              <span>
                A Graffiti Artist,
              </span>
            </li>
          </ul>
        </div>
        <div className="profile-container">
          <img src={Image} className="img-fluid rounded-start profile" alt="David Kasilia Profile" />
        </div>
        <div className="profile-text-container">
          <p className="profile-text">
            A Remote Enthusiast
            <br />
            With Passion For:
            <br />
            Creating High Quality UI & Great UX Websites & Android Applications
          </p>
        </div>
        <div className="download-container">
          <DownloadResume />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

// {/*  */}
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
