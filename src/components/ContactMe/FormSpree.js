/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mpzbvrag');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
