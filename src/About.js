import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      
      
      <section className="about-section">
        <h1>About SK Enterprises</h1>
        <p>We specialize in AC repair, washing machine repair, and other services. Our mission is to provide high-quality, reliable solutions to our customers.</p>
      </section>

      
      <section className="history-section">
        <h2>Our History</h2>
        <p>Founded in 2010, SK Enterprises has been serving customers with dedication and expertise.</p>
      </section>

      
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>AC Installation & Repair</li>
          <li>Washing Machine Maintenance & Fixing</li>
          <li>Refrigerator Servicing</li>
          <li>Microwave Oven Repair</li>
        </ul>
      </section>

      
      <section className="video-section">
        <h2>Watch Our Work</h2>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/arOO_z5XF74?start=52" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default About;


