import React from "react";
import "./Location.css";
const LocationPage = () => {
  return (
    <div className="location-container">
      <div className="header-section">
        <h1>📍 Our Location</h1>
        <p>Visit us at our office or contact us for more details.</p>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373531531802!3d-37.816279179751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f6835ab2a6d!2sFederation+Square!5e0!3m2!1sen!2sin!4v1646938415726!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="info-container">
        <div className="contact-details">
          <h2>📞 Contact Us</h2>
          <p><strong>📍 Address:</strong> 123 Main Street, Melbourne, Australia</p>
          <p><strong>📞 Phone:</strong> <a href="tel:+123456789">+1 234 567 89</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
        </div>

        {/* Business Hours */}
        <div className="business-hours">
          <h2>🕒 Business Hours</h2>
          <ul>
            <li><strong>Monday - Friday:</strong> 9 AM - 6 PM</li>
            <li><strong>Saturday:</strong> 10 AM - 4 PM</li>
            <li><strong>Sunday:</strong> 12AM - 3PM</li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;