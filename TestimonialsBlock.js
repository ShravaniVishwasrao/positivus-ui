import React, { useState } from "react";


const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus completely transformed our digital presence. Their strategic approach and dedication helped us scale faster than expected.",
    name: "Emily Johnson",
    role: "CEO at BrightTech",
  },
  {
    text: "From SEO to paid campaigns, the results have been outstanding. Highly recommended for companies serious about growth.",
    name: "Michael Brown",
    role: "Founder at GrowthLab",
  },
];

const TestimonialsBlock = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-container">

        {/* Slider */}
        <div
          className="testimonials-slider"
          style={{ transform: `translateX(-${index * 730}px)` }}
        >
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="speech-bubble">
                <p className="testimonial-text">“{item.text}”</p>
                <div className="bubble-tail" />
              </div>

              <div className="testimonial-author">
                <span className="author-name">{item.name}</span>
                <span className="author-role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="slider-controls">
          <button onClick={prev} className="arrow">←</button>

          <div className="dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
              />
            ))}
          </div>

          <button onClick={next} className="arrow">→</button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsBlock;
