import React from 'react';
import { Contact } from '../types';
import SearchBar from './SearchBar';

interface ContactListProps {
  contacts: Contact[];
  onUpdateContact: (updatedContact: Contact) => void;
  onDeleteContact: (id: number) => void;
  onOpenModal: (contact: Contact) => void;
  onSearch: (keyword: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onUpdateContact,
  onDeleteContact,
  onOpenModal,
  onSearch
}) => {
  const handleEditContact = (contact: Contact) => {
    onOpenModal(contact);
  };

  const handleDeleteContact = (id: number, event: React.FormEvent) => {
    event.stopPropagation()
    onDeleteContact(id);
  };

  const style = {
    line: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1px solid #ccc',
      cursor: 'pointer'
    }
  };

  return (
    <div className='p-2'>
      <h2>Contacts</h2>
      <SearchBar onSearch={onSearch}></SearchBar>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <div>
          {contacts.map((contact) => (
            <div style={style.line} key={contact.id} onClick={() => handleEditContact(contact)}>
              {contact.firstName} {contact.lastName} - {contact.phoneNumber}
              {/* <button className=''>Edit</button> */}
              <button className="btn btn-danger" onClick={(event) => handleDeleteContact(contact.id, event)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
