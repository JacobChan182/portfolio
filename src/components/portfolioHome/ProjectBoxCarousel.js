import React, { useState } from "react";

export default function ProjectBoxCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  if (!total) return null;

  return (
    <div className="project-box-carousel">
      <div className="project-box-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className="project-box-carousel__slide">
            {slide}
          </div>
        ))}
      </div>
      <div className="project-box-carousel__controls">
        <div className="project-box-carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`project-box-carousel__dot ${i === index ? 'project-box-carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
