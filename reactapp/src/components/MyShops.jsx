import React, { useEffect, useState } from "react";

export default function MyShops() {
  const [shops, setShops] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => {
        const myShops = data.filter((s) => s.email === email);
        setShops(myShops);
      })
      .catch((err) => console.error(err));
  }, [email]);

  return (
    <div>
      <h2>My Shops</h2>
      {shops.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Spices</th>
              <th>Experience</th>
              <th>Store Location</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.name}</td>
                <td>{shop.spices}</td>
                <td>{shop.experience}</td>
                <td>{shop.storeLocation}</td>
                <td>{shop.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No shops found for your account.</p>
      )}
    </div>
  );
}
