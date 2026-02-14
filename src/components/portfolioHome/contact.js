import React, { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import ContactCard from "../portfolioContact/ContactCard";

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
      <h1>Let's connect!</h1>
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
    </section>
  );
}
