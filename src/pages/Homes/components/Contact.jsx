import React from 'react';
import '../styles/Contact.scss';

const Contact = ({ icon }) =>{
    return(
        <div>
          <a 
          href={icon.url}
          target='_blank'>
            <img src={icon.image} alt={icon.name} />
          </a>
        </div>
    )
}

export {Contact};