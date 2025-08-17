import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Form handlers
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Simulate success (can be replaced with actual fetch to backend)
    setSuccess("Your message was sent successfully! ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">📬 Contact Us</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-icon">📞</span>
          <div>
            <strong>Phone</strong>
            <p>+91 98765 43210</p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">✉️</span>
          <div>
            <strong>Email</strong>
           
            <p>info@spice.com</p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">🏢</span>
          <div>
            <strong>Head Office</strong>
            <p>123 Spice Street, Coimbatore, Tamil Nadu</p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">⏰</span>
          <div>
            <strong>Business Hours</strong>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a message</h3>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          autoComplete="off"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          autoComplete="off"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
        />
        <button type="submit">Send Message</button>
        {error && <p className="contact-error">{error}</p>}
        {success && <p className="contact-success">{success}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
