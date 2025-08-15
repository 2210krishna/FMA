import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Import the CSS file
import spice1 from "../assets/spice1.png";
import spice2 from "../assets/spice2.png";
import spice3 from "../assets/spice3.png";
import spice4 from "../assets/spice4.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* Header Section */}
      <section className="welcome-header">
              <div className="nav-buttons">
          <button onClick={() => navigate("/login")} className="btn btn-login">
            Login
          </button>
          <button onClick={() => navigate("/register")} className="btn btn-register">
            Register
          </button>
        </div>

        <h1>Welcome to Spice Merchant Portal</h1>
        <p>
          Discover a world of rich flavors and aromatic spices. Our portal helps
          spice merchants connect, trade, and share their finest blends.
          Whether you’re here to buy, sell, or explore, you’re in the right
          place!
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Explore Our Features</h2>
        <ul>
          <li>🌿 Connect with spice merchants worldwide</li>
          <li>📦 Manage orders and shipments easily</li>
          <li>📊 Track sales and inventory in real time</li>
          <li>💬 Engage with the spice trading community</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us?</h2>
        <p>
          Our platform is built with trust, efficiency, and community in mind.
          We bring together the best spice traders in the market, ensuring
          top-quality products and fair trade practices. Whether you are a
          seasoned merchant or just starting, we have tools tailored for your
          success.
        </p>
      </section>

      {/* Full-width Testimonial */}
      <section className="testimonial-section">
        <blockquote>
          "The Spice Merchant Portal transformed my business! Now I can reach
          buyers from across the globe with ease."
          <br />— A Happy Merchant
        </blockquote>
      </section>

      {/* Motivational Image Gallery */}
      <section className="image-gallery">
        <h2>Our Journey in Pictures</h2>
        <div className="gallery-grid">
      <img src={spice1} alt="Spice Market" />
      <img src={spice2} alt="Aromatic Herbs" />
      <img src={spice3} alt="Spice Storage" />
      <img src={spice4} alt="Spice Blends" />
    </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Start?</h2>
        <p>Join our growing community of spice traders today!</p>
        <button
          onClick={() => navigate("/register")}
          className="btn btn-start"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
