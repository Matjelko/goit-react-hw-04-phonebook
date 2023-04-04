// import { Component } from "react";
// import { useState } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.css'
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return(
        <ul className="contactList__unordered-list">
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} {...contact} onDeleteContact={onDeleteContact}/>
            ))}
        </ul>
    )
}

// class ContactList extends Component {
//     render() {
//         const { contacts, onDeleteContact } = this.props;
//         return (
//             <ul className="contactList__unordered-list">
//                 {contacts.map((contact) => (
//                     <ContactListItem key={contact.id} {...contact} onDeleteContact={onDeleteContact}/>
//                 ))}
//             </ul>
//         );
//     }
// }

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func
}

export default ContactList