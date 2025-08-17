import React from 'react';
import './OurProducts.css';

const products = [
  {
    name: "Turmeric Powder",
    description: "Premium quality from Salem, India — rich in curcumin for health benefits.",
    icon: "🌿"
  },
  {
    name: "Cardamom",
    description: "Aromatic green pods sourced from Kerala’s spice gardens.",
    icon: "🍃"
  },
  {
    name: "Cloves",
    description: "Strong, fragrant cloves perfect for curries and medicinal uses.",
    icon: "🌸"
  },
  {
    name: "Black Pepper",
    description: "Bold and spicy Malabar black pepper with high piperine content.",
    icon: "🌶️"
  },
  {
    name: "Red Chili Powder",
    description: "Fiery and vibrant powder made from sun-dried chilies.",
    icon: "🔥"
  },
  {
    name: "Garam Masala",
    description: "Special house blend of warming spices for rich flavor.",
    icon: "🧄"
  },
  {
    name: "Coriander Powder",
    description: "Freshly ground coriander seeds for a citrusy, nutty flavor.",
    icon: "🍃"
  },
  {
    name: "Cinnamon",
    description: "Sweet and aromatic cinnamon sticks from Sri Lanka.",
    icon: "🍂"
  },
  {
    name: "Nutmeg",
    description: "Whole nutmeg seeds — warm, sweet, and earthy in flavor.",
    icon: "🌰"
  },
  {
    name: "Mustard Seeds",
    description: "Black and yellow mustard seeds for pickles and tempering.",
    icon: "🟡"
  },
];

const OurProducts = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-list">
        {products.map(({ name, description, icon }) => (
          <div key={name} className="product-card" tabIndex={0}>
            <div className="product-icon">{icon}</div>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
