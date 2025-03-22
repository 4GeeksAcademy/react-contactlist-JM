import React from 'react';
import ContactForm from '../components/ContactForm';

const AddEditContact = () => {
  return (
    <div>
      <h1>{window.location.pathname.includes('edit') ? 'Edit Contact' : ''}</h1>
      <ContactForm />
    </div>
  );
};

export default AddEditContact;