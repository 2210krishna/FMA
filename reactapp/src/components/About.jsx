import React from 'react';
import './About.css';
import'./About.css';
const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Spice Merchant</h2>
      <table className="about-table">
        <tbody>
          <tr>
            <th>Who We Are</th>
            <td>
              We are a passionate team of spice enthusiasts, dedicated to bringing you the finest and freshest spices from around the world. Our goal is to preserve traditional flavors while introducing unique blends to your kitchen.
            </td>
          </tr>
          <tr>
            <th>What We Offer</th>
            <td>
              From aromatic cardamom to fiery chili powders, we offer a wide range of authentic spices, handpicked and packed with care to ensure freshness and quality in every pinch.
            </td>
          </tr>
          <tr>
            <th>Our Mission</th>
            <td>
              To connect spice lovers and merchants through a seamless marketplace, ensuring every recipe gets the authentic flavor it deserves.
            </td>
          </tr>
          <tr>
            <th>Why Choose Us</th>
            <td>
              We believe in quality, authenticity, and sustainability. Our spices are ethically sourced, hygienically processed, and delivered with love.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
