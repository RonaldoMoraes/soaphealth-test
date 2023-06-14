import React from 'react';
import { Contact } from '../types';

interface ContactListProps {
  contacts: Contact[];
  onUpdateContact: (updatedContact: Contact) => void;
  onDeleteContact: (id: number) => void;
  onOpenModal: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onUpdateContact,
  onDeleteContact,
  onOpenModal
}) => {
  const handleEditContact = (contact: Contact) => {
    onOpenModal(contact);
  };

  const handleDeleteContact = (id: number) => {
    onDeleteContact(id);
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName} - {contact.phoneNumber}
              <button onClick={() => handleEditContact(contact)}>Edit</button>
              <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
