import React, { useState } from 'react';
import { ContactFormValues } from '../types';

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const values: ContactFormValues = {
      firstName,
      lastName,
      phoneNumber,
    };
    onSubmit(values);

    // Clear the form inputs after submission
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;