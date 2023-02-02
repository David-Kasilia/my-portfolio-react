import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaBootstrap, FaSketch, FaFigma, FaGitAlt, FaLinux, FaWindows,
} from 'react-icons/fa';
import {
  SiRedux, SiRubyonrails, SiPostgresql, SiBlender, SiFirebase, SiHeroku, SiJest, SiPostman,
} from 'react-icons/si';

const Skills = () => (
  <div className="container-fluid skills-page">
    <div className="card skills-card">
      <div className="card-header text-white text-center fw-bold fs-4">
        Front-End
      </div>
      <ul className="list-group list-group-flush fw-semi-bold fs-6">
        <li className="list-group-item">
          <FaHtml5 className="fs-4 ms-3 me-3" />
          HTML5
        </li>
        <li className="list-group-item">
          <FaCss3Alt className="fs-4 ms-3 me-3" />
          CSS3
        </li>
        <li className="list-group-item">
          <FaJsSquare className="fs-4 ms-3 me-3" />
          JavaScript
        </li>
        <li className="list-group-item">
          <FaReact className="fs-4 ms-3 me-3" />
          React
        </li>
        <li className="list-group-item">
          <SiRedux className="fs-4 ms-3 me-3" />
          Redux
        </li>
        <li className="list-group-item">
          <FaBootstrap className="fs-4 ms-3 me-3" />
          Bootstrap
        </li>
      </ul>
      <div className="card-header text-white text-center fw-bold fs-4">
        Back-End
      </div>
      <ul className="list-group list-group-flush fw-semi-bold fs-6">
        <li className="list-group-item">
          <FaSketch className="fs-4 ms-3 me-3" />
          Ruby
        </li>
        <li className="list-group-item">
          <SiRubyonrails className="fs-4 ms-3 me-3" />
          Ruby On Rails
        </li>
        <li className="list-group-item">
          <SiPostgresql className="fs-4 ms-3 me-3" />
          PostgreSQL
        </li>
      </ul>
      <div className="card-header text-white text-center fw-bold fs-4">
        Tools
      </div>
      <ul className="list-group list-group-flush fw-semi-bold fs-6">
        <li className="list-group-item">
          <FaFigma className="fs-4 ms-3 me-3" />
          <FaGitAlt className="fs-4 ms-3 me-3" />
          <FaLinux className="fs-4 ms-3 me-3" />
          <FaWindows className="fs-4 ms-3 me-3" />
          <SiBlender className="fs-4 ms-3 me-3" />
          <SiFirebase className="fs-4 ms-3 me-3" />
          <SiHeroku className="fs-4 ms-3 me-3" />
          <SiJest className="fs-4 ms-3 me-3" />
          <SiPostman className="fs-4 ms-3 me-3" />
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
