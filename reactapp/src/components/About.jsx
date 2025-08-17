import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">🌶️ About Our Spice Merchant</h2>
      <p className="about-intro">
        At Spice Merchant, we don’t just sell spices – we share a tradition, a culture, and a story of flavors passed down through generations.  
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>👩‍🍳 Who We Are</h3>
          <p>
            We are a passionate team of spice enthusiasts, dedicated to bringing you the finest and freshest spices from around the world.  
            Our goal is to preserve traditional flavors while introducing unique blends to your kitchen.
          </p>
        </div>

        <div className="about-card">
          <h3>🛒 What We Offer</h3>
          <p>
            From aromatic cardamom to fiery chili powders, we offer a wide range of authentic spices, handpicked and hygienically packed with care to ensure freshness, purity, and quality in every pinch.
          </p>
        </div>

        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To connect spice lovers and merchants through a seamless marketplace, ensuring that every recipe gets the authentic flavor it deserves.
          </p>
        </div>

        <div className="about-card">
          <h3>🌍 Our Values</h3>
          <p>
            We stand by ethics, authenticity, and sustainability. All our spices are ethically sourced, processed with love, and delivered responsibly to protect both you and our planet.
          </p>
        </div>

        <div className="about-card">
          <h3>⭐ Why Choose Us</h3>
          <p>
            Because we don’t just give you spices – we give you an experience of culture, aroma, and taste.  
            With unmatched quality, reliable service, and innovative blends, your kitchen will never be the same!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
