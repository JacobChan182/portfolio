import React, { useState } from "react";

export default function ProjectBoxCarousel({ slides }) {
  const [hovered, setHovered] = useState(false);
  const total = slides.length;
  const index = hovered && total > 1 ? 1 : 0;

  if (!total) return null;

  return (
    <div
      className="project-box-carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="project-box-carousel__track"
        style={{
          height: `${total * 100}%`,
          transform: `translateY(-${index * (100 / total)}%)`,
          ['--slides']: total,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="project-box-carousel__slide">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
