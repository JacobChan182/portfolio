import React, { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import ContactCard from "../components/portfolioContact/ContactCard";

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
    <header className="App-header contact-header">
      <h1>Let's connect!</h1>
      <div
        style={{
          minHeight: "2vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
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
    </header>
  );
}
