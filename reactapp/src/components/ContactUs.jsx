import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <table className="contact-table">
        <tbody>
          <tr>
            <th>Phone</th>
            <td>+91 98765 43210</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>info@spicemerchant.com</td>
          </tr>
          <tr>
            <th>Head Office</th>
            <td>123 Spice Street, Coimbatore, Tamil Nadu</td>
          </tr>
          <tr>
            <th>Business Hours</th>
            <td>Mon - Sat: 9:00 AM - 6:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactUs;
