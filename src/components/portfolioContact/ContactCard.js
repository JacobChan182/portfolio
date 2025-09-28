import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./ContactCard.css";
import { Slide, Box } from "@mui/material";


const icons = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  email: <MdEmail />,
};

const colors = {
  linkedin: "#0077b5",
  github: "#333333",
  email: "#1e3765",
};

const ContactCard = ({ platform, name, link, username }) => {
  return (  
    <div className="contact-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <div
          className="contact-icon"
          style={{ backgroundColor: colors[platform] }}
        >
          {icons[platform]}
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
