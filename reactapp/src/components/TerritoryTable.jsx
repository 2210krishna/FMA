
// import React, { useEffect, useState } from "react";
// import "./TerritoryTable.css";

// export default function TerritoryTable() {
//   const [territories, setTerritories] = useState([]);

//   const fetchTerritories = () => {
//     fetch("http://localhost:5001/territory/pending")
//       .then((res) => res.json())
//       .then((data) => setTerritories(data))
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetchTerritories();
//   }, []);

//   const handleAccept = async (id) => {
//     try {
//       await fetch(`http://localhost:5001/territory/accept/${id}`, { method: "POST" });
//       fetchTerritories();
//       alert("Application moved to Spice Merchant table");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleReject = async (id) => {
//     const reason = prompt("Enter rejection reason:");
//     if (!reason) return;

//     try {
//       await fetch(`http://localhost:5001/territory/reject/${id}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(reason),
//       });
//       fetchTerritories();
//       alert("Application rejected!");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="territory-table-container">
//       <h2>Territory Table - Pending Applications</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Evaluator ID</th>
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
//           {territories.map((t) => (
//             <tr key={t.id}>
//               <td>{t.id}</td>
//               <td>{t.evaluatorId}</td>
//               <td>{t.name}</td>
//               <td>{t.email}</td>
//               <td>{t.spices}</td>
//               <td>{t.experience}</td>
//               <td>{t.storeLocation}</td>
//               <td>{t.phoneNumber}</td>
//               <td>{t.status}</td>
//               <td>
//                 <button onClick={() => handleAccept(t.id)}>Accept</button>
//                 <button onClick={() => handleReject(t.id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./TerritoryTable.css";

export default function TerritoryTable() {
  const [territories, setTerritories] = useState([]);
  const [location, setLocation] = useState("");

  const fetchTerritories = () => {
    let url = "http://localhost:5001/territory/pending";
    if (location) {
      url += `?location=${location}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTerritories(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTerritories();
  }, [location]);

  const handleAccept = async (id) => {
    try {
      await fetch(`http://localhost:5001/territory/accept/${id}`, { method: "POST" });
      fetchTerritories();
      alert("Application moved to Spice Merchant table");
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    const reason = prompt("Enter rejection reason:");
    if (!reason) return;

    try {
      await fetch(`http://localhost:5001/territory/reject/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reason),
      });
      fetchTerritories();
      alert("Application rejected!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="territory-table-container">
      <h2>Territory Table - Pending Applications</h2>

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
            <th>Location</th>
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
              <td>{t.location}</td>
              <td>{t.status}</td>
              <td>
                <button onClick={() => handleAccept(t.id)}>Accept</button>
                <button onClick={() => handleReject(t.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
