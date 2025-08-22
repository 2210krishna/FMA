
// import React, { useEffect, useState } from "react";
// import './EvaluatorTable.css';

// export default function EvaluatorTable() {
//   const [evaluators, setEvaluators] = useState([]);

//   const fetchEvaluators = () => {
//     fetch("http://localhost:5001/evaluator/pending")
//       .then((res) => res.json())
//       .then((data) => setEvaluators(data))
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetchEvaluators();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await fetch(`http://localhost:5001/evaluator/evaluate/${id}`, { method: "PUT" });
//       fetchEvaluators();
//       alert("Application approved!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleReject = async (id) => {
//     const reason = prompt("Enter rejection reason:");
//     if (!reason) return; // cancel if user didn't enter

//     try {
//       await fetch(`http://localhost:5001/evaluator/reject/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(reason),
//       });
//       fetchEvaluators();
//       alert("Application rejected!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="evaluator-container">
//       <h2>Evaluator Table - Pending Applications</h2>
//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Spices</th>
//             <th>Experience</th>
//             <th>Store Location</th>
//             <th>Phone</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {evaluators.map((e) => (
//             <tr key={e.id}>
//               <td>{e.id}</td>
//               <td>{e.name}</td>
//               <td>{e.email}</td>
//               <td>{e.spices}</td>
//               <td>{e.experience}</td>
//               <td>{e.storeLocation}</td>
//               <td>{e.phoneNumber}</td>
//               <td>{e.status}</td>
//               <td>
//                 <button onClick={() => handleApprove(e.id)}>Approve</button>
//                 <button onClick={() => handleReject(e.id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import './EvaluatorTable.css';

export default function EvaluatorTable() {
  const [evaluators, setEvaluators] = useState([]);
  const [location, setLocation] = useState("");

  const fetchEvaluators = () => {
    let url = "http://localhost:5001/evaluator/pending";
    if (location) {
      url += `?location=${location}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvaluators(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvaluators();
  }, [location]);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:5001/evaluator/evaluate/${id}`, { method: "PUT" });
      fetchEvaluators();
      alert("Application approved!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    const reason = prompt("Enter rejection reason:");
    if (!reason) return;

    try {
      await fetch(`http://localhost:5001/evaluator/reject/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reason),
      });
      fetchEvaluators();
      alert("Application rejected!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="evaluator-container">
      <h2>Evaluator Table - Pending Applications</h2>

      <label>
        Filter by Location:{" "}
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra">Andhra</option>
          <option value="Telangana">Telangana</option>
        </select>
      </label>

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
            <th>Location</th>
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
              <td>{e.location}</td>
              <td>{e.status}</td>
              <td>
                <div className="action-buttons">
                  <button onClick={() => handleApprove(e.id)}>Approve</button>
                  <button className="reject-btn" onClick={() => handleReject(e.id)}>Reject</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
