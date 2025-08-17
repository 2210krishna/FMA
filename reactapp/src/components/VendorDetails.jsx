import React, { useEffect, useState } from "react";
import './VendorDetails.css';

export default function VendorDetails() {
  const [vendor, setVendor] = useState(null);
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => {
        const myVendor = data.find((s) => s.email === email);
        setVendor(myVendor || null);
      })
      .catch((err) => console.error("Error fetching vendor details:", err));
  }, [email]);

  return (
    <div className="vendor-details-container">
      <h2>My Details</h2>
      {vendor ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.storeLocation}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No details found for your account.</p>
      )}
    </div>
  );
}
