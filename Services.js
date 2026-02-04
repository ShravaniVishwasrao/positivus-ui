import React from "react";


const Services = () => {
  return (
    <section className="services">

      {/* Heading + Subheading */}
      <div className="services-heading">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-cards">

  {/* Card 1 */}
  <div className="service-card gray">
    <div className="card-left">
      <h3>
        Search engine optimization
      </h3>

      <div className="learn-more">
        <span className="arrow">↗</span>
        <span>Learn more</span>
      </div>
    </div>

    <img
      src="\tokyo-magnifier-web-search-with-elements 2.png"
      alt="SEO Illustration"
      className="card-illustration"
    />
  </div>

  {/* Card 2 */}
  <div className="service-card green">
    <div className="card-left">
      <h3>
        Pay-per-click advertising
      </h3>

      <div className="learn-more">
        <span className="arrow">↗</span>
        <span>Learn more</span>
      </div>
    </div>

    <img
      src="/Illustration 2.png"
      alt="PPC Illustration"
      className="card-illustration"
    />
  </div>

</div>

    </section>
  );
};

export default Services;
