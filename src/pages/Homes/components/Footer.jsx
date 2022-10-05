import React from "react";
import { useContact } from "../hooks/useContact";
import ContactList from "./ContactList";
import { Contact } from "./Contact";
import "../styles/Footer.scss";

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
