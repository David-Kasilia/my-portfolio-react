/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ContactForm from './FormSpree';

const Contact = () => (
  <div className="container-fluid homepage">
    <div className="container-fluid contact-header">
      <h2 className="text-white fs-3 fw-bold">GET IN TOUCH</h2>
      <h5 className="text-white fs-6">
        Do You have any questions? Would you like to connect with me?
        <br />
        Feel Free to send me a message and I will get back to you as soon as I can.
        <br />
        Thank you!!
      </h5>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
