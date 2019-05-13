import React from 'react';

const PhonebookList = (props) => {
    return (
        <ul>
          {props.phonebook.map(contact => <li key={contact.id}>{contact.name} - {contact.phone} - {contact.email}</li>)}
        </ul>
    );
};


export default PhonebookList;