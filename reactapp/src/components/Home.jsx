import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to the <span>Spice Merchant</span> Franchise Application</h1>
        <p>
          Join our community of passionate spice merchants and share your unique 
          spice blends with the world! Start your journey today.
        </p>
        <Link className="apply-btn" to="/apply">
          🌶️ Get Your Spice Merchant Franchise
        </Link>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <h3>📦 Easy Application</h3>
          <p>Apply in just a few minutes with our simple online process.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Wide Reach</h3>
          <p>Expand your spice business across multiple regions and markets.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Strong Support</h3>
          <p>Get guidance from our franchise managers at each step.</p>
        </div>
      </div>
    </div>
  );
}
