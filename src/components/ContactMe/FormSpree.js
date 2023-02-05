/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mpzbvrag');
  if (state.succeeded) {
    return (
      <div className="alert alert-success mt-5 w-50 ms-5" role="alert">
        Thank You For Contacting David Kasilia!!
        <div className="spinner-grow text-success float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-details">
      <form onSubmit={handleSubmit}>
        <div className="row mt-5">
          <div className="col">
            <label className="form-label text-white fs-5">
              First Name
            </label>
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <label className="form-label text-white fs-5">
              Last Name
            </label>
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="email" className="form-label text-white fs-5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Valid Email Address"
            className="form-control"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="mb-3 fs-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Enter Your Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" className="download-btn mt-2 fw-bold fs-5" disabled={state.submitting} onClick={() => setTimeout(() => { location.reload(); }, 5500)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
