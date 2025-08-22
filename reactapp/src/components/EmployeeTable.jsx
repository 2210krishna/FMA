// import React, { useState, useEffect } from "react";
// import "./EmployeeTable.css";

// export default function EmployeeTable() {
//   const [employees, setEmployees] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     location: "",
//   });
//   const [search, setSearch] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Fetch all employees
//   const fetchEmployees = async () => {
//     try {
//       const res = await fetch("http://localhost:5001/employees");
//       const data = await res.json();
//       setEmployees(data);
//     } catch (err) {
//       console.error("Error fetching employees:", err);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editId) {
//         await fetch(`http://localhost:5001/employees/${editId}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//         setEditId(null);
//       } else {
//         await fetch("http://localhost:5001/employees", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//       }

//       setFormData({ name: "", email: "", phone: "", role: "", location: "" });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error saving employee:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
//     if (!confirmDelete) return;

//     try {
//       await fetch(`http://localhost:5001/employees/${id}`, {
//         method: "DELETE",
//       });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error deleting employee:", err);
//     }
//   };

//   const handleEdit = (emp) => {
//     setFormData({
//       name: emp.name,
//       email: emp.email,
//       phone: emp.phone,
//       role: emp.role,
//       location: emp.location,
//     });
//     setEditId(emp.id);
//   };

//   const filteredEmployees = employees.filter(
//     (emp) =>
//       emp.name.toLowerCase().includes(search.toLowerCase()) ||
//       emp.email.toLowerCase().includes(search.toLowerCase()) ||
//       emp.role.toLowerCase().includes(search.toLowerCase()) ||
//       (emp.location && emp.location.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <div className="employee-container">
//       <h2>Employee Management</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by name, email, role or location..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       {/* Add / Edit Form */}
//       <form onSubmit={handleSubmit} className="add-form">
//   <input
//     type="text"
//     name="name"
//     placeholder="Name"
//     value={formData.name}
//     onChange={handleChange}
//     required
//   />
//   <input
//     type="email"
//     name="email"
//     placeholder="Email"
//     value={formData.email}
//     onChange={handleChange}
//     required
//   />
//   <input
//     type="text"
//     name="phone"
//     placeholder="Phone"
//     value={formData.phone}
//     onChange={handleChange}
//     required
//   />

//   {/* Wrap Role and Location in flex container */}
//   <div className="role-location-row">
//     <select
//       name="role"
//       value={formData.role}
//       onChange={handleChange}
//       required
//     >
//       <option value="">Select Role</option>
//       <option value="EVALUATOR">Evaluator</option>
//       <option value="TERRITORY_MANAGER">Territory Manager</option>
//       <option value="FRANCHISE_MANAGER">Franchise Manager</option>
//     </select>

//     <select
//       name="location"
//       value={formData.location}
//       onChange={handleChange}
//       required
//     >
//       <option value="">Select Location</option>
//       <option value="Tamil Nadu">Tamil Nadu</option>
//       <option value="Kerala">Kerala</option>
//       <option value="Karnataka">Karnataka</option>
//       <option value="Andhra Pradesh">Andhra Pradesh</option>
//       <option value="Telangana">Telangana</option>
//     </select>
//   </div>

//   <button type="submit">
//     {editId ? "Update Employee" : "Add Employee"}
//   </button>
// </form>

//       {/* Employee Table */}
//       <div className="table-wrapper">
//         <table>
//           <thead>
//             <tr className="sticky">
//               <th style={{ width: "60px" }}>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Location</th>
//               <th style={{ width: "160px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEmployees.length > 0 ? (
//               filteredEmployees.map((emp) => (
//                 <tr key={emp.id}>
//                   <td data-label="ID">{emp.id}</td>
//                   <td data-label="Name">{emp.name}</td>
//                   <td data-label="Email">{emp.email}</td>
//                   <td data-label="Phone">{emp.phone}</td>
//                   <td data-label="Role">{emp.role}</td>
//                   <td data-label="Location">{emp.location}</td>
//                   <td data-label="Actions">
//                     <div className="action-buttons">
//                       <button
//                         className="edit-btn"
//                         onClick={() => handleEdit(emp)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="delete-btn"
//                         onClick={() => handleDelete(emp.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7">No employees found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./EmployeeTable.css";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
  });
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const role = localStorage.getItem("role");

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
      if (editId) {
        await fetch(`http://localhost:5001/employees/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditId(null);
      } else {
        await fetch("http://localhost:5001/employees", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      setFormData({ name: "", email: "", phone: "", role: "", location: "" });
      fetchEmployees();
    } catch (err) {
      console.error("Error saving employee:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await fetch(`http://localhost:5001/employees/${id}`, { method: "DELETE" });
      fetchEmployees();
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  const handleEdit = (emp) => {
    setFormData({
      name: emp.name,
      email: emp.email,
      phone: emp.phone,
      role: emp.role,
      location: emp.location,
    });
    setEditId(emp.id);
  };

  // ✅ Export employees to Excel
  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(employees);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "employees.xlsx");
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      (emp.location && emp.location.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="employee-container">
      <h2>Employee Management</h2>

      <div className="search-download-row">
  <input
    type="text"
    placeholder="Search by name, email, role or location..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
  {role === "ADMIN" && (
    <button className="download-btn" onClick={handleDownloadExcel}>
      ⬇ Download Excel
    </button>
  )}
</div>

      {/* Add / Edit Form */}
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

  {/* Wrap Role and Location in flex container */}
  <div className="role-location-row">
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

    <select
      name="location"
      value={formData.location}
      onChange={handleChange}
      required
    >
      <option value="">Select Location</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Kerala">Kerala</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Telangana">Telangana</option>
    </select>
  </div>

  <button type="submit">
    {editId ? "Update Employee" : "Add Employee"}
  </button>
</form>

      {/* Employee Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className="sticky">
              <th style={{ width: "60px" }}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Location</th>
              <th style={{ width: "160px" }}>Actions</th>
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
                  <td data-label="Location">{emp.location}</td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(emp)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  );
}
