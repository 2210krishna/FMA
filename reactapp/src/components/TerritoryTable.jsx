import React, { useEffect, useState } from "react";

export default function TerritoryTable() {
  const [territories, setTerritories] = useState([]);

  const fetchTerritories = () => {
    fetch("http://localhost:5001/territory/pending")
      .then((res) => res.json())
      .then((data) => setTerritories(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTerritories();
  }, []);

  const handleAccept = async (id) => {
    try {
      await fetch(`http://localhost:5001/territory/accept/${id}`, { method: "POST" });
      fetchTerritories();
      alert("Application moved to Spice Merchant table");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Territory Table - Pending Applications</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Evaluator ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Spices</th>
            <th>Experience</th>
            <th>Store Location</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {territories.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.evaluatorId}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.spices}</td>
              <td>{t.experience}</td>
              <td>{t.storeLocation}</td>
              <td>{t.phoneNumber}</td>
              <td>{t.status}</td>
              <td>
                <button onClick={() => handleAccept(t.id)}>Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
