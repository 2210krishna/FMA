
 import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Spice Merchant Franchise Application</h1>
      <p>
        Join our community of passionate spice merchants and share your unique spice blends!
      </p>
      <Link className="apply-btn" to="/apply">
        Get Your Spice Merchant Franchise
      </Link>
    </div>
  );
}
