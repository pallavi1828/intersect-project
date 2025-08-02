// src/components/BrandHeader.jsx
import React from "react";
import "../styles/BrandHeader.css";

const BrandHeader = () => {
  return (
    <div className="brand-header">
      <img src="/images/logo.jpg" alt="Intersect Logo" className="brand-logo" />
      <div className="brand-title-group">
        <h1 className="brand-title">INTERSECT INDIA PVT LIMITED</h1>
        <p className="brand-tagline">
          <span className="tag-pink">Innovation</span>,&nbsp;
          <span className="tag-yellow">Connection</span>,&nbsp;
          <span className="tag-blue">Inspiration</span>
        </p>
      </div>
    </div>
  );
};

export default BrandHeader;
