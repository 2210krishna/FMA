// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Welcome.css"; // Import the CSS file
// // import spice1 from "../assets/spice1.png";
// // import spice2 from "../assets/spice2.png";
// // import spice3 from "../assets/spice3.png";
// // import spice4 from "../assets/spice4.png";

// // export default function Welcome() {
// //   const navigate = useNavigate();

// //   // For button press effect
// //   const [btnPressed, setBtnPressed] = useState({
// //     login: false,
// //     register: false,
// //     start: false,
// //   });

// //   const handleMouseDown = (btn) => {
// //     setBtnPressed((prev) => ({ ...prev, [btn]: true }));
// //   };
// //   const handleMouseUp = (btn) => {
// //     setBtnPressed((prev) => ({ ...prev, [btn]: false }));
// //   };
// //   const handleMouseLeave = (btn) => {
// //     setBtnPressed((prev) => ({ ...prev, [btn]: false }));
// //   };

// //   return (
// //     <div className="welcome-container">
// //       <section className="welcome-header">
// //         <div className="nav-buttons">
// //           <button
// //             onClick={() => navigate("/login")}
// //             className={`btn btn-login ${btnPressed.login ? "pressed" : ""}`}
// //             onMouseDown={() => handleMouseDown("login")}
// //             onMouseUp={() => handleMouseUp("login")}
// //             onMouseLeave={() => handleMouseLeave("login")}
// //           >
// //             Login
// //           </button>
// //           <button
// //             onClick={() => navigate("/register")}
// //             className={`btn btn-register ${btnPressed.register ? "pressed" : ""}`}
// //             onMouseDown={() => handleMouseDown("register")}
// //             onMouseUp={() => handleMouseUp("register")}
// //             onMouseLeave={() => handleMouseLeave("register")}
// //           >
// //             Register
// //           </button>
// //         </div>

// //         <h1>Welcome to Spice Merchant Portal</h1>
// //         <p>
// //           Discover a world of rich flavors and aromatic spices. Our portal helps spice
// //           merchants connect, trade, and share their finest blends. Whether you’re here
// //           to buy, sell, or explore, you’re in the right place!
// //         </p>
// //       </section>

// //       <section className="features-section">
// //         <h2>Explore Our Features</h2>
// //         <ul>
// //           <li>🌿 Connect with spice merchants worldwide</li>
// //           <li>📦 Manage orders and shipments easily</li>
// //           <li>📊 Track sales and inventory in real time</li>
// //           <li>💬 Engage with the spice trading community</li>
// //         </ul>
// //       </section>

// //       <section className="why-section">
// //         <h2>Why Choose Us?</h2>
// //         <p>
// //           Our platform is built with trust, efficiency, and community in mind. We bring
// //           together the best spice traders in the market, ensuring top-quality products
// //           and fair trade practices. Whether you are a seasoned merchant or just
// //           starting, we have tools tailored for your success.
// //         </p>
// //       </section>

// //       <section className="testimonial-section">
// //         <blockquote>
// //           "The Spice Merchant Portal transformed my business! Now I can reach buyers
// //           from across the globe with ease."
// //           <br />— A Happy Merchant
// //         </blockquote>
// //       </section>

// //       <section className="image-gallery">
// //         <h2>Our Journey in Pictures</h2>
// //         <div className="gallery-grid">
// //           <img src={spice1} alt="Spice Market" />
// //           <img src={spice2} alt="Aromatic Herbs" />
// //           <img src={spice3} alt="Spice Storage" />
// //           <img src={spice4} alt="Spice Blends" />
// //         </div>
// //       </section>

// //       <section className="cta-section">
// //         <h2>Ready to Start?</h2>
// //         <p>Join our growing community of spice traders today!</p>
// //         <button
// //           onClick={() => navigate("/register")}
// //           className={`btn btn-start ${btnPressed.start ? "pressed" : ""}`}
// //           onMouseDown={() => handleMouseDown("start")}
// //           onMouseUp={() => handleMouseUp("start")}
// //           onMouseLeave={() => handleMouseLeave("start")}
// //         >
// //           Get Started
// //         </button>
// //       </section>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Welcome.css";

// import spice1 from "../assets/spice1.png";
// import spice2 from "../assets/spice2.png";
// import spice3 from "../assets/spice3.png";
// import spice4 from "../assets/spice4.png";

// export default function Welcome() {
//   const navigate = useNavigate();

//   const [testimonialIndex, setTestimonialIndex] = useState(0);
//   const testimonials = [
//     {
//       text:
//         "The Spice Merchant Portal transformed my business! Now I can reach buyers from across the globe with ease.",
//       author: "— A Happy Merchant",
//     },
//     {
//       text:
//         "An incredible platform with amazing features that make spice trading seamless and enjoyable!",
//       author: "— Spice Trader",
//     },
//     {
//       text:
//         "Love the community aspect and how easy it is to manage orders and shipments.",
//       author: "— Marketplace User",
//     },
//   ];

//   const nextTestimonial = () => {
//     setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setTestimonialIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="welcome-container new-layout">
//       {/* Hero section */}
//       <section className="hero-section">
//         <div className="hero-text">
//           <h1>Welcome to Spice Merchant Portal</h1>
//           <p>
//             Connect, trade, and share your finest spice blends with merchants worldwide.
//           </p>
//           <div className="hero-buttons">
//             <button className="btn btn-primary" onClick={() => navigate("/login")}>
//               Login
//             </button>
//             <button className="btn btn-secondary" onClick={() => navigate("/register")}>
//               Register
//             </button>
//           </div>
//         </div>
//         <div className="hero-images">
//           <img src={spice1} alt="Spice Market" />
//           <img src={spice2} alt="Aromatic Herbs" />
//           <img src={spice3} alt="Spice Storage" />
//           <img src={spice4} alt="Spice Blends" />
//         </div>
//       </section>

//       {/* Features cards */}
//       <section className="features-cards">
//         <h2>Our Features</h2>
//         <div className="cards-container">
//           <article className="feature-card">
//             <span className="icon">🌿</span>
//             <h3>Global Connections</h3>
//             <p>Engage with spice merchants worldwide in a trusted community.</p>
//           </article>
//           <article className="feature-card">
//             <span className="icon">📦</span>
//             <h3>Order Management</h3>
//             <p>Easily handle orders, shipments, and inventory with advanced tools.</p>
//           </article>
//           <article className="feature-card">
//             <span className="icon">📊</span>
//             <h3>Real-time Tracking</h3>
//             <p>Monitor your sales and inventory with live data and analytics.</p>
//           </article>
//           <article className="feature-card">
//             <span className="icon">💬</span>
//             <h3>Community Engagement</h3>
//             <p>Share knowledge, tips, and trade strategies with fellow traders.</p>
//           </article>
//         </div>
//       </section>

//       {/* Testimonials carousel */}
//       <section className="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <div className="testimonial-card">
//           <p className="testimonial-text">"{testimonials[testimonialIndex].text}"</p>
//           <p className="testimonial-author">{testimonials[testimonialIndex].author}</p>
//           <div className="testimonial-controls">
//             <button onClick={prevTestimonial} aria-label="Previous testimonial">‹</button>
//             <button onClick={nextTestimonial} aria-label="Next testimonial">›</button>
//           </div>
//         </div>
//       </section>

//       {/* Call to action banner */}
//       <section className="cta-banner">
//         <h2>Ready to Spice Up Your Business?</h2>
//         <button className="btn btn-cta" onClick={() => navigate("/register")}>
//           Join Now
//         </button>
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

import spice1 from "../assets/spice1.png";
import spice2 from "../assets/spice2.png";
import spice3 from "../assets/spice3.png";
import spice4 from "../assets/spice4.png";
import southIndiaMap from "../assets/Dravida_nadu.png"; // Add a suitable South India map image here

const spiceList = [
  "Turmeric", "Cardamom", "Cinnamon", "Cloves", "Black Pepper",
  "Coriander", "Cumin", "Fenugreek", "Saffron", "Mustard Seeds"
];

export default function Welcome() {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [spiceIndex, setSpiceIndex] = useState(0);

  const testimonials = [
    {
      text:
        "The Spice Merchant Portal transformed my business! Now I can reach buyers from across the globe with ease.",
      author: "— A Happy Merchant",
    },
    {
      text:
        "An incredible platform with amazing features that make spice trading seamless and enjoyable!",
      author: "— Spice Trader",
    },
    {
      text:
        "Love the community aspect and how easy it is to manage orders and shipments.",
      author: "— Marketplace User",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSpice = () => {
    setSpiceIndex((prev) => (prev + 1) % spiceList.length);
  };

  const prevSpice = () => {
    setSpiceIndex((prev) =>
      prev === 0 ? spiceList.length - 1 : prev - 1
    );
  };

  return (
    <div className="welcome-container new-layout">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Spice Merchant Portal</h1>
          <p>
            Connect, trade, and share your finest spice blends with merchants worldwide.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
        <div className="hero-images">
          <img src={spice1} alt="Spice Market" />
          <img src={spice2} alt="Aromatic Herbs" />
          <img src={spice3} alt="Spice Storage" />
          <img src={spice4} alt="Spice Blends" />
        </div>
      </section>

      {/* Features cards */}
      <section className="features-cards">
        <h2>Our Features</h2>
        <div className="cards-container">
          <article className="feature-card">
            <span className="icon">🌿</span>
            <h3>Global Connections</h3>
            <p>Engage with spice merchants worldwide in a trusted community.</p>
          </article>
          <article className="feature-card">
            <span className="icon">📦</span>
            <h3>Order Management</h3>
            <p>Easily handle orders, shipments, and inventory with advanced tools.</p>
          </article>
          <article className="feature-card">
            <span className="icon">📊</span>
            <h3>Real-time Tracking</h3>
            <p>Monitor your sales and inventory with live data and analytics.</p>
          </article>
          <article className="feature-card">
            <span className="icon">💬</span>
            <h3>Community Engagement</h3>
            <p>Share knowledge, tips, and trade strategies with fellow traders.</p>
          </article>
        </div>
      </section>

      {/* South India Franchise Map Section */}
      <section className="franchise-map-section">
        <h2>Our Franchise in South India</h2>
        <div className="map-container">
          <img src={southIndiaMap} alt="South India Franchise Map" className="south-india-map" />
          <ul className="franchise-states">
            <li>TN - Tamil Nadu</li>
            <li>KL - Kerala</li>
            <li>TL - Telangana</li>
            <li>KA - Karnataka</li>
            <li>AP - Andhra Pradesh</li>
          </ul>
        </div>
      </section>

      {/* Spice Interactive Slider */}
      <section className="spice-slider-section">
        <h2>Discover Our Top 10 Spices</h2>
        <div className="spice-slider">
          <button onClick={prevSpice} aria-label="Previous spice" className="slider-btn">‹</button>
          <div className="spice-display">
            <p>{spiceList[spiceIndex]}</p>
          </div>
          <button onClick={nextSpice} aria-label="Next spice" className="slider-btn">›</button>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">"{testimonials[testimonialIndex].text}"</p>
          <p className="testimonial-author">{testimonials[testimonialIndex].author}</p>
          <div className="testimonial-controls">
            <button onClick={prevTestimonial} aria-label="Previous testimonial">‹</button>
            <button onClick={nextTestimonial} aria-label="Next testimonial">›</button>
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <section className="cta-banner">
        <h2>Ready to Spice Up Your Business?</h2>
        <button className="btn btn-cta" onClick={() => navigate("/register")}>
          Join Now
        </button>
      </section>
      <section className="contact-info-section">
      <h2>Contact Information</h2>
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
    </section>
    </div>
  );
}
