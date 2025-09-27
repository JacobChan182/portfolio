import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./ContactCard.css"; // import the CSS file

const ContactCard = ({ name, link, username }) => {
  return (
    <div className="contact-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
        <div className="contact-icon">
          <FaLinkedin />
        </div>
        <div>
          <h3 className="contact-name">{name}</h3>
          <p className="contact-username">{username}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
