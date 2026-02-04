import React from "react";

const Processblock = () => {
  return (
    <section className="process-block">

      {/* ===== Card 01 (Expanded) ===== */}
      <div className="process-card active">

        

        {/* Divider */}
        <hr className="card-divider" />

        {/* Description */}
        <p className="card-description">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>

        {/* Header */}
        <div className="card-header">
          <div className="card-label">
            <span className="step-number">01</span>
            <span className="step-title">Consultation</span>
          </div>

          <div className="icon-circle">
            <span className="minus-icon">−</span>
          </div>
        </div>
      </div>

      

      {/* ===== Card 02 (Collapsed) ===== */}
      <div className="process-card collapsed">
        <div className="card-header">
          <div className="card-label">
            <span className="step-number">02</span>
            <span className="step-title">
              Research and Strategy Development
            </span>
          </div>

          <div className="icon-circle">
            <span className="plus-icon">+</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Processblock;
