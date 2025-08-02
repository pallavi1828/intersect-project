import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ThankYou.css';

function ThankYou() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="check-icon">✔</div>
        <h2>Success!</h2>
        <p>Your queries has been submitted successfully.</p>
        <p className="note">Kindly check your email for further notifications.</p>
        <Link to="/contact">
          <button className="back-btn">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
