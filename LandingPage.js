import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Logotypes from "../components/Logotypes";
import Services from "../components/Services";
import WorkingProcess from "../components/WorkingProcess";
import Processblock from "../components/Processblock";
import TestimonialsHeader from "../components/TestimonialsHeader";
import TestimonialsBlock from "../components/TestimonialsBlock";
import Footer from "../components/Footer";

import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />
      <Header />
      <Logotypes />
      <Services />
      <WorkingProcess />
      <Processblock/>
      <TestimonialsHeader/>
      <TestimonialsBlock/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
