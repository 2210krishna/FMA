import React, { useEffect, useState } from "react";
import './EvaluatorTable.css';

export default function EvaluatorTable() {
  const [evaluators, setEvaluators] = useState([]);

  const fetchEvaluators = () => {
    fetch("http://localhost:5001/evaluator/pending")
      .then((res) => res.json())
      .then((data) => setEvaluators(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvaluators();
  }, []);

  const handleApprove = async (id) => {
    try {
        await fetch(`http://localhost:5001/evaluator/evaluate/${id}`, { method: "PUT" });
      fetchEvaluators();
      alert("Application approved!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="evaluator-container">
      <h2>Evaluator Table - Pending Applications</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
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
        {evaluators.map((e) => (
          <tr key={e.id}>
            <td data-label="ID">{e.id}</td>
            <td data-label="Name">{e.name}</td>
            <td data-label="Email">{e.email}</td>
            <td data-label="Spices">{e.spices}</td>
            <td data-label="Experience">{e.experience}</td>
            <td data-label="Store Location">{e.storeLocation}</td>
            <td data-label="Phone">{e.phoneNumber}</td>
            <td data-label="Status">{e.status}</td>
            <td data-label="Action">
              <button onClick={() => handleApprove(e.id)}>Approve</button>
            </td>
          </tr>
        ))}
      </tbody>

      </table>
    </div>
  );
}
