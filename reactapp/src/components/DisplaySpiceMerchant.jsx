import React, { useEffect, useState } from "react";

function DisplaySpiceMerchant() {
  const [merchants, setMerchants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter merchants based on search input
  const filteredMerchants = merchants.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.spices.toLowerCase().includes(search.toLowerCase()) ||
    m.storeLocation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Spice Merchant Applications</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name, spice, or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      {filteredMerchants.length > 0 ? (
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
            {filteredMerchants.map((m) => (
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
