import React, { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import ContactCard from "../portfolioContact/ContactCard";
import ContactForm from "../portfolioContact/ContactForm";

export default function Contact() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const cards = [
    {
      platform: "linkedin",
      name: "Jacob Chan",
      link: "https://www.linkedin.com/in/jacobchan182",
    },
    {
      platform: "github",
      name: "JacobChan182",
      link: "https://github.com/jacobchan182",
    },
    {
      platform: "email",
      name: "jacob.chan@mail.utoronto.ca",
      link: "mailto:jacob.chan@mail.utoronto.ca",
    },
  ];

  return (
    <section className="section contact-section">
      <h2>Let's connect!</h2>
      <div className="contact-section__layout">
        <div className="contact-section__grid">
          {cards.map((card, index) => (
            <Slide
              key={card.platform}
              direction="up"
              in={checked}
              timeout={300 + index * 200}
            >
              <div>
                <ContactCard {...card} />
              </div>
            </Slide>
          ))}
        </div>
        <Slide direction="up" in={checked} timeout={500}>
          <div className="section-box contact-section__form-wrap">
            <ContactForm />
          </div>
        </Slide>
      </div>
    </section>
  );
}
