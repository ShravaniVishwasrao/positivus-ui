import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>
          Navigating the <br />
          digital landscape <br />
          for success
        </h1>

        <p>
          Our digital marketing agency helps businesses grow and succeed
          online through a range of services including SEO, PPC, social
          media marketing, and content creation.
        </p>

        <button className="cta-btn">Book a consultation</button>
      </div>

      <div className="header-right">
        {/* Illustration image */}
        <img src="/Illustration.png" alt="Marketing Illustration" />

      </div>
    </header>
  );
};

export default Header;
