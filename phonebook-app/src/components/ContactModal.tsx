import React, { useState } from 'react';
import { Contact, ContactFormValues } from '../types';

interface ContactModalProps {
  contact: Contact | null;
  onSubmit: (updatedContact: Contact | ContactFormValues) => Promise<void>;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onSubmit, onClose }) => {
  const [firstName, setFirstName] = useState(contact?.firstName || '');
  const [lastName, setLastName] = useState(contact?.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(contact?.phoneNumber || '');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updatedContact: ContactFormValues = {
      firstName,
      lastName,
      phoneNumber,
    };

    onSubmit(updatedContact);
  };

  return (
    <div>
      <h3>{contact ? 'Update' : 'Create'} Contact</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
        </div>
        <div>
          <button type="submit">{contact ? 'Update' : 'Save'}</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
