import React from "react";
import machine from "../src/image/machine.webp";
import image from "../src/image/image.jpg";
import images from "../src/image/images.jpg";
import machine1 from "../src/image/machine1.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Company Introduction Section */}
      <div className="home-container">
        <div className="image-container">
          <img src={machine} alt="Machine" className="machine-image" />
        </div>
        <div className="text-container">
          <h1>Welcome to SK Enterprises</h1>
          <p>
            At <strong>SK Enterprises</strong>, we specialize in professional repair and installation services.
            Our team of expert technicians is dedicated to providing top-notch solutions, ensuring your home and
            commercial appliances function efficiently. We take pride in delivering reliable, affordable, and
            high-quality services that guarantee customer satisfaction.
          </p>
          <button className="home-button">Learn More</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <h1>Never Take Broken for an Answer</h1>
        <p>
          Get the instructions you need with quality repair parts, tools, and the expertise of a robust community.
        </p>
        <div className="image-gallery">
          <img src={image} alt="Repair 1" />
          <img src={images} alt="Repair 2" />
          <img src={machine1} alt="Repair 3" />
        </div>
      </div>

      {/* Service Highlights */}
      <div className="our_Service"> <h1>Our Service</h1></div>
      <div className="service-highlights">
        <div className="service-box">
          <img src={image} alt="Service 1" />
          <p>
            We specialize in AC repair, washing machine repair, refrigerator servicing, and more.
            Our skilled professionals ensure top-quality service with timely solutions.
            We use genuine spare parts to enhance the durability of your appliances.
          </p>
        </div>
        <div className="service-box">
          <p>
            We provide hassle-free installation and maintenance services, keeping your appliances running smoothly.
            Our team ensures a quick and efficient setup for all major brands.
            Regular maintenance checks help prevent unexpected breakdowns.
          </p>
          <img src={images} alt="Service 2" />
        </div>
        <div className="service-box">
          <img src={machine} alt="Service 3" />
          <p>
            Customer satisfaction is our priority, and we work to exceed your expectations with every service.
            Our 24/7 support ensures you get assistance whenever needed.
            Book a service today and experience professional care for your appliances!
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>Watch Our Repair Guides</h2>
        <p>Learn more about our repair and maintenance services through these detailed video guides.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/YJpAj6mUyCc?si=BCc5SD8p_OHAyBom"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r-iYfmrzvnA?si=4j8wj-gbCIJUSKip"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          At <strong>SK Enterprises</strong>, we take pride in providing the best repair and installation services.
          Here’s why customers trust us:
        </p>
        <div className="features">
          <div className="feature-box">
            <h3>✅ Expert Technicians</h3>
            <p>Our highly skilled professionals ensure top-quality repairs with precision and expertise.</p>
          </div>
          <div className="feature-box">
            <h3>✅ Affordable Pricing</h3>
            <p>We offer competitive rates without compromising on service quality.</p>
          </div>
          <div className="feature-box">
            <h3>✅ Quick & Reliable Service</h3>
            <p>We understand the urgency of repairs and provide fast, reliable solutions.</p>
          </div>
          <div className="feature-box">
            <h3>✅ Customer Satisfaction</h3>
            <p>We prioritize customer satisfaction and ensure every service meets your expectations.</p>
          </div>
          <div className="feature-box">
            <h3>✅ 24/7 Support</h3>
            <p>Our support team is available around the clock to assist with any issues.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
