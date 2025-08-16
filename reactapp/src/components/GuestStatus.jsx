// GuestStatus.js
import React, { useEffect, useState } from "react";

export default function GuestStatus() {
  const [status, setStatus] = useState("");
  const email = localStorage.getItem("guestEmail");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5001/guest/status/${email}`)
        .then((res) => res.text())
        .then((data) => setStatus(data))
        .catch(() => setStatus("Error fetching status"));
    }
  }, [email]);
  

  if (!email) {
    return <p>No guest email found. Please login again.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Application Status</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}
