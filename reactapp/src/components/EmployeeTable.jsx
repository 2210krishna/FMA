import React, { useState, useEffect } from "react";
import './EmployeeTable.css';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [search, setSearch] = useState("");

  // Fetch all employees
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5001/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", phone: "", role: "" });
      fetchEmployees();
    } catch (err) {
      console.error("Error adding employee:", err);
    }
  };

  // Filter employees by search
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-container">
      <h2>Employee Management</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, email or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Add Employee Form */}
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
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
        </select>
        <button type="submit">Add Employee</button>
      </form>

      {/* Employees Table */}
      <table>
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
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td data-label="ID">{emp.id}</td>
                <td data-label="Name">{emp.name}</td>
                <td data-label="Email">{emp.email}</td>
                <td data-label="Phone">{emp.phone}</td>
                <td data-label="Role">{emp.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
