import React, { useState } from 'react';
import { Contact, ContactFormValues } from '../types';
import { Modal, Button } from 'react-bootstrap';

interface ContactModalProps {
  contact: Contact | null;
  onSubmit: (updatedContact: Contact | ContactFormValues) => Promise<void>;
  onClose: () => void;
  isModalOpen: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onSubmit, onClose, isModalOpen }) => {
  const [firstName, setFirstName] = useState(contact?.firstName || '');
  const [lastName, setLastName] = useState(contact?.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(contact?.phoneNumber || '');
  // const [isModalOpen, setIsModalOpen] = useState(isModalOpen || false);

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
    <Modal show={isModalOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{contact ? 'Update' : 'Create'} Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="text-end">
            <Button variant="primary" type="submit">
              {contact ? 'Update' : 'Save'}
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
