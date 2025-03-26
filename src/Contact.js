import React, { useState } from 'react';
import './ContactUsPage.css';  
import   Location from './Location.js';
import'./Location.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbwrC07b1lRbNTtKtiyphBIsnKk84tRz3EluLv5MhttXgZfeATURj2Lv9GSMG2h-QGB5/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setStatus("Success! Your message has been sent.");
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setStatus("Error! Something went wrong, please try again.");
      });
  };

  return (
   <>
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
          required
        ></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {status && <p className="status-message">{status}</p>}

      <div className="contact-info">
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Email:</strong> info@skenterprises.com</p>
      </div>
    
    </div>
    < Location/>
   </>
  );
}
export default Contact;
