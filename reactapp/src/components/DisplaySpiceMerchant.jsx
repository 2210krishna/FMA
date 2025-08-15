import React, { useEffect, useState } from "react";

function DisplaySpiceMerchant() {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Spice Merchant Applications</h2>
      {merchants.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Spices</th>
              <th>Experience</th>
              <th>Store Location</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.spices}</td>
                <td>{m.experience}</td>
                <td>{m.storeLocation}</td>
                <td>{m.phoneNumber}</td>
                <td>{m.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No merchants found</p>
      )}
    </div>
  );
}

export default DisplaySpiceMerchant;
