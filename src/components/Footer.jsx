import React from "react";
import { useContact } from "../pages/Homes/hooks/useContact";
import ContactList from "../pages/Homes/components/ContactList";
import { Contact } from "../pages/Homes/components/Contact";
import '../styles/Footer.scss';

const Footer = () => {
  const [ iconsContact ] = useContact();
  return (
    <footer>
      <div className="pie">
        <p>Este taller basico lo desarrollò</p>
        <p>Carlos Villafrades Pinilla.</p>
      </div>
        <ContactList>
            {iconsContact.map((icon) => (
                <Contact icon={icon} key={icon.id} />
            ))}
        </ContactList>
    </footer>
  );
};

export default Footer;
