import React, { useEffect, useState } from "react";
import "./TerritoryTable.css";

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
    <div className="territory-table-container">
      <h2>Territory Table - Pending Applications</h2>
      <table>
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
              <td data-label="ID">{t.id}</td>
              <td data-label="Evaluator ID">{t.evaluatorId}</td>
              <td data-label="Name">{t.name}</td>
              <td data-label="Email">{t.email}</td>
              <td data-label="Spices">{t.spices}</td>
              <td data-label="Experience">{t.experience}</td>
              <td data-label="Store Location">{t.storeLocation}</td>
              <td data-label="Phone">{t.phoneNumber}</td>
              <td data-label="Status">{t.status}</td>
              <td data-label="Action">
                <button onClick={() => handleAccept(t.id)}>Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
