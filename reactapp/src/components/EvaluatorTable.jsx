import React, { useEffect, useState } from "react";

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
    <div>
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
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.spices}</td>
              <td>{e.experience}</td>
              <td>{e.storeLocation}</td>
              <td>{e.phoneNumber}</td>
              <td>{e.status}</td>
              <td>
                <button onClick={() => handleApprove(e.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
