import React from 'react';
import Image from '../../assets/images/myImage.png';

const About = () => (
  <div className="container-fluid homepage">
    <div className="card mb-3 about-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Image} className="img-fluid rounded-start my-image" alt="David Kasilia Profile" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title ms-5 fs-1 fw-bold text-white name">ABOUT ME</h5>
            <p className="card-text fs-6 mt-3 fw-semibold text-white">
              Hello! I&#39;m David Kasilia from Nairobi Kenya.
              <br />
              I am a full-stack web developer and an associate android developer.
              I am currently studying with Microverse, an online international
              remote software development school.
              <br />
              I&#39;ve studied with Google Africa Developers Scholarship for one year as an
              Associate Android Developer using Kotlin as an object-oriented
              language to build android applications.
              <br />
              I am more passionate about creating a high-user interface and
              giving the best user experience in any website or android application I build.
              <br />
              Some of the programming languages I am familiar with include:
              Kotlin, JavaScript, HTML, Ruby and CSS.
              I&#39;m open to new remote job opportunities.
              <br />
              In my free time,
              I like drawing art or graffiti, listening to music, gaming, or watching movies.
            </p>
            <button type="button" className="btn btn-danger ms-5 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Read More
            </button>

          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Here Is Some More Information About Me</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body bg-dark">
            <ul className="list-group list-group-flush bg-dark">
              <li className="list-group-item bg-dark text-white">
                <h4>Email:</h4>
                davidkasilia001@gmail.com
                <br />
                videlishious4227@gmail.com
              </li>
              <li className="list-group-item bg-dark text-white">
                <h4>Phone:</h4>
                +254771152403
                <br />
                +254797223893
              </li>
              <li className="list-group-item bg-dark text-white">
                <h4>Study:</h4>
                Microverse,
                PluralSight
              </li>
              <li className="list-group-item bg-dark text-white">
                <h4>Freelance:</h4>
                Available
              </li>
              <li className="list-group-item bg-dark text-white">
                <h4>Hobbies:</h4>
                Graffiti Art, Listening to music,
                Playing Cards, Gaming and Traveling
              </li>
            </ul>

          </div>
          <div className="modal-footer bg-dark">
            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default About;
