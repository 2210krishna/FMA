// src/components/Employee.js
import React, { useState, useEffect } from "react";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  // Fetch all employees from backend
  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5001/employees");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5001/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", phone: "", role: "" });
      fetchEmployees(); // refresh list
    } catch (err) {
      console.error("Error adding employee:", err);
    }
  };

  return (
    <div className="p-4">
      <h2>Employee Management</h2>

      {/* Form to add employee */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />{" "}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />{" "}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />{" "}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="EVALUATOR">Evaluator</option>
          <option value="TERRITORY_MANAGER">Territory Manager</option>
          <option value="FRANCHISE_MANAGER">Franchise Manager</option>
        </select>{" "}
        <button type="submit">Add Employee</button>
      </form>

      {/* Employee list */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
