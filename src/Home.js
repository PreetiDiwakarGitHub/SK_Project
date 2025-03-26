import React from "react";
import machine from "../src/image/machine.webp";
import image from "../src/image/image.jpg";
import images from "../src/image/images.jpg";
import machine1 from "../src/image/machine1.jpg";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <img src={machine} alt="Machine" className="machine-image" />
        </div>
        <div className="text-container">
          <h1>Welcome to SK Enterprises</h1>
          <p>
            We provide top-notch repair and installation services, including AC repair, washing machine repair, and more.
            Our expert team ensures quality service and customer satisfaction.
          </p>
          <button className="home-button">Learn More</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <h1>Never take broken for an answer</h1>
        <p>
          Get the instructions you need with quality repair parts and tools and the expertise of a robust community.
        </p>
        <div className="image-gallery">
          <img src={image} alt="Repair 1" />
          <img src={images} alt="Repair 2" />
          <img src={machine1} alt="Repair 3" />
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>Watch Our Repair Guides</h2>
        <p>
          Learn more about our repair and maintenance services through these detailed video guides.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/YJpAj6mUyCc?si=BCc5SD8p_OHAyBom"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r-iYfmrzvnA?si=4j8wj-gbCIJUSKip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          At <strong>SK Enterprises</strong>, we take pride in providing the best repair and installation services. Here’s why customers trust us:
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
