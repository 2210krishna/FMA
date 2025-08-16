import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("GUEST"); // Default role
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setSuccess(data.message || "✅ Registration successful!");
        setError("");
  
        // Only auto-login for non-restricted users
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", role);
        }
  
        setTimeout(() => navigate("/home"), 1500);
      } else {
        // ❌ Show backend error (employee not found, email already exists, etc.)
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <h2>Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Role */}
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          >
            <option value="GUEST">Guest</option>
            <option value="VENDOR">Vendor</option>
            <option value="TERRITORY_MANAGER">Territory Manager</option>
            <option value="EVALUATOR">Evaluator</option>
            <option value="FRANCHISE_MANAGER">Franchise Manager</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          style={{ padding: "8px 16px", marginTop: "10px", cursor: "pointer" }}
        >
          Register
        </button>
      </form>

      {/* Back Button */}
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            background: "#ccc",
            border: "none",
            cursor: "pointer",
          }}
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
}
