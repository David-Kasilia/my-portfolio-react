/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Project from './Project';

const Projects = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#af0505' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#af0505' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const project = Project;

  return (
    <div className="container-fluid projects">
      <h1 className="ms-5 fs-1 fw-bold text-white">MY PROJECTS</h1>
      <Slider {...settings}>
        {project.map((project) => (
          <div key={project.id} className="card border-dark project-card">
            <img src={project.image} className="card-img-top project-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-white">
                {project.name}
              </h5>
              <hr />
              <p className="card-text  text-white">
                Description:
                <br />
                {project.description}
              </p>
              <div className="d-flex justify-content-evenly me-2 ms-2">
                <a className="btn btn-outline-secondary" href={project.source} role="button">
                  <FaGithub className="fa-brands fs-2 text-white" />
                </a>
                <a className="btn btn-outline-secondary" href={project.live} role="button">
                  <FaExternalLinkAlt className="fa-brands fs-2 text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
