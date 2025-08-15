import React from 'react';
import './OurProducts.css';

const OurProducts = () => {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <table className="products-table">
        <tbody>
          <tr>
            <th>Turmeric Powder</th>
            <td>Premium quality from Salem, India — rich in curcumin for health benefits.</td>
          </tr>
          <tr>
            <th>Cardamom</th>
            <td>Aromatic green pods sourced from Kerala’s spice gardens.</td>
          </tr>
          <tr>
            <th>Cloves</th>
            <td>Strong, fragrant cloves perfect for curries and medicinal uses.</td>
          </tr>
          <tr>
            <th>Black Pepper</th>
            <td>Bold and spicy Malabar black pepper with high piperine content.</td>
          </tr>
          <tr>
            <th>Red Chili Powder</th>
            <td>Fiery and vibrant powder made from sun-dried chilies.</td>
          </tr>
          <tr>
            <th>Garam Masala</th>
            <td>Special house blend of warming spices for rich flavor.</td>
          </tr>
          <tr>
            <th>Coriander Powder</th>
            <td>Freshly ground coriander seeds for a citrusy, nutty flavor.</td>
          </tr>
          <tr>
            <th>Cinnamon</th>
            <td>Sweet and aromatic cinnamon sticks from Sri Lanka.</td>
          </tr>
          <tr>
            <th>Nutmeg</th>
            <td>Whole nutmeg seeds — warm, sweet, and earthy in flavor.</td>
          </tr>
          <tr>
            <th>Mustard Seeds</th>
            <td>Black and yellow mustard seeds for pickles and tempering.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OurProducts;
