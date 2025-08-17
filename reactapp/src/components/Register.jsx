import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("GUEST");
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

        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", role);
        }

        setTimeout(() => navigate("/home"), 1500);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-header">Register</h2>

        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <table className="register-table">
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                  />
                </td>
              </tr>

              <tr>
                <td><label>Email:</label></td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                  />
                </td>
              </tr>

              <tr>
                <td><label>Password:</label></td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                </td>
              </tr>

              <tr>
                <td><label>Confirm Password:</label></td>
                <td>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                </td>
              </tr>

              <tr>
                <td><label>Role:</label></td>
                <td>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-input"
                  >
                    <option value="GUEST">Guest</option>
                    <option value="VENDOR">Vendor</option>
                    <option value="TERRITORY_MANAGER">Territory Manager</option>
                    <option value="EVALUATOR">Evaluator</option>
                    <option value="FRANCHISE_MANAGER">Franchise Manager</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn btn-register">
            Register
          </button>
        </form>

        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => navigate("/")} className="btn btn-back">
            🔙 Back
          </button>
        </div>
      </div>
    </div>
  );
}
