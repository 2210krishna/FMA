import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // create styling as needed

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!email || !newPassword) {
      setError("Please fill in all fields");
      return;
    }
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(newPassword)) {
      setError("Password must contain at least one uppercase letter and one number");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5001/auth/forgot-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message || "Password reset successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <h2 className="forgot-password-header">Reset Password</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
  
        <form onSubmit={handleSubmit} className="forgot-password-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          placeholder="Enter new password"
        />

        <button type="submit">Reset Password</button>
      </form>
      </div>
    </div>
  );
  
}
