import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        setPhoneError('Only numbers are allowed.');
        return;
      }
      if (value.length > 10) return;
      setPhoneError('');
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setPhoneError('');
      navigate('/thank-you');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <div className="full-banner">
        <img src="/images/contact-banner.jpg" alt="Contact Us Banner" />
      </div>

      <div className="banner-message">
        <p>We are here to answer your questions and explore new opportunities with you.</p>
      </div>

      <div className="contact-page-container">
        {/* LEFT SIDE */}
        <div className="left-column">
          <div className="contact-address">
            <h3>📍 Bengaluru Branch</h3>
            <p>
              Intersect India Private Limited<br />
              1st Floor, 4th N-Block, Rajajinagar,<br />
              Bengaluru - 560010, Karnataka, India
            </p>

            <h3>📍 Hyderabad Branch</h3>
            <p>
              Intersect India Private Limited<br />
              #304, D-Block, Fortune Towers,<br />
              Madhapur, Hyderabad - 500081<br />
            </p>

            <h3>📞 Phone</h3>
            <p><a href="tel:08079641699">080 796 41699</a></p>
            <p><a href="tel:+919113918195">+91 9113918195</a></p>
            
            <h3>✉️ Email</h3>
            <p><a href="mailto:info@intersectindia.com">info@intersectindia.com</a></p>
            <p><a href="mailto:intersectindiaprivatelimited@gmail.com">intersectindiaprivatelimited@gmail.com</a></p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Phone*</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            {phoneError && <small className="error-text">{phoneError}</small>}

            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="right-column">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.38741168835!2d77.5577354750767!3d12.984781287331808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc6ec1c693f%3A0xafe94a3514964b92!2sIntersect%20India%20Private%20Limited!5e1!3m2!1sen!2sin!4v1752741883088!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Intersect India Private Limited Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
