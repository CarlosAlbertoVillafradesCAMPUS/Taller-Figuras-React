import React from 'react';
import '../styles/ContactList.scss';

const ContactList = (props) => {
    return(
        <div className="cont-icons">
           {props.children}
        </div>
    )
}

export default ContactList;