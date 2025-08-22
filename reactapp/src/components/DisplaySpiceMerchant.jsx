
// import React, { useEffect, useState } from "react";
// import "./DisplaySpiceMerchant.css";

// function DisplaySpiceMerchant() {
//   const [merchants, setMerchants] = useState([]);
//   const [search, setSearch] = useState("");
//   const [editingMerchant, setEditingMerchant] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     spices: "",
//     experience: "",
//     storeLocation: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const role = localStorage.getItem("role"); // Get role from localStorage

//   useEffect(() => {
//     fetch("http://localhost:5001/getAllSpiceMerchants")
//       .then((res) => res.json())
//       .then((data) => setMerchants(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredMerchants = merchants.filter(
//     (m) =>
//       m.name.toLowerCase().includes(search.toLowerCase()) ||
//       m.spices.toLowerCase().includes(search.toLowerCase()) ||
//       m.storeLocation.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleEdit = (merchant) => {
//     setEditingMerchant(merchant.id);
//     setFormData({ ...merchant });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     fetch(`http://localhost:5001/updateSpiceMerchant/${editingMerchant}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((updated) => {
//         setMerchants(
//           merchants.map((m) => (m.id === updated.id ? updated : m))
//         );
//         setEditingMerchant(null);
//       })
//       .catch((err) => console.error(err));
//   };

//   // New handler to delete merchant
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this merchant?")) {
//       fetch(`http://localhost:5001/deleteSpiceMerchant/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Failed to delete");
//           }
//           // Remove merchant from state
//           setMerchants((prev) => prev.filter((m) => m.id !== id));
//         })
//         .catch((err) => console.error(err));
//     }
//   };

//   return (
//     <div className="display-spice-container">
//       <h2>Spice Merchant Applications</h2>

//       <input
//         type="text"
//         placeholder="Search by name, spice, or location"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       {filteredMerchants.length > 0 ? (
//         <div className="table-wrapper">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Spices</th>
//                 <th>Experience</th>
//                 <th>Store Location</th>
//                 <th>Phone</th>
//                 {(role === "ADMIN" || role === "FRANCHISE_MANAGER") && (
//                   <th>Action</th>
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//   {filteredMerchants.map((m) => (
//     <tr key={m.id}>
//       {editingMerchant === m.id ? (
//         <>
//           <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
//           <td><input type="text" name="email" value={formData.email} onChange={handleChange} /></td>
//           <td><input type="text" name="spices" value={formData.spices} onChange={handleChange} /></td>
//           <td><input type="text" name="experience" value={formData.experience} onChange={handleChange} /></td>
//           <td><input type="text" name="storeLocation" value={formData.storeLocation} onChange={handleChange} /></td>
//           <td><input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /></td>
//           <td>
//             {role === "ADMIN" && (
//               <>
//                 <button className="save-btn" onClick={handleUpdate}>Save</button>
//                 <button className="cancel-btn" onClick={() => setEditingMerchant(null)}>Cancel</button>
//               </>
//             )}
//           </td>
//         </>
//       ) : (
//         <>
//           <td>{m.name}</td>
//           <td>{m.email}</td>
//           <td>{m.spices}</td>
//           <td>{m.experience}</td>
//           <td>{m.storeLocation}</td>
//           <td>{m.phoneNumber}</td>
//           <td>
//             {role === "ADMIN" && (
//               <button className="edit-btn" onClick={() => handleEdit(m)}>Edit</button>
//             )}
//             {role === "FRANCHISE_MANAGER" && (
//               <button className="delete-btn" onClick={() => handleDelete(m.id)}>Delete</button>
//             )}
//           </td>
//         </>
//       )}
//     </tr>
//   ))}
// </tbody>

//           </table>
//         </div>
//       ) : (
//         <p>No merchants found</p>
//       )}
//     </div>
//   );
// }

// export default DisplaySpiceMerchant;
// import React, { useEffect, useState } from "react";
// import "./DisplaySpiceMerchant.css";

// function DisplaySpiceMerchant() {
//   const [merchants, setMerchants] = useState([]);
//   const [search, setSearch] = useState("");
//   const [editingMerchant, setEditingMerchant] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     spices: "",
//     experience: "",
//     location: "",      // ✅ added
//     storeLocation: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const role = localStorage.getItem("role"); // Get role from localStorage

//   useEffect(() => {
//     fetch("http://localhost:5001/getAllSpiceMerchants")
//       .then((res) => res.json())
//       .then((data) => setMerchants(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredMerchants = merchants.filter(
//     (m) =>
//       m.name.toLowerCase().includes(search.toLowerCase()) ||
//       m.spices.toLowerCase().includes(search.toLowerCase()) ||
//       m.storeLocation.toLowerCase().includes(search.toLowerCase()) ||
//       (m.location && m.location.toLowerCase().includes(search.toLowerCase())) // ✅ location search
//   );

//   const handleEdit = (merchant) => {
//     setEditingMerchant(merchant.id);
//     setFormData({ ...merchant });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     fetch(`http://localhost:5001/updateSpiceMerchant/${editingMerchant}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((updated) => {
//         setMerchants(
//           merchants.map((m) => (m.id === updated.id ? updated : m))
//         );
//         setEditingMerchant(null);
//       })
//       .catch((err) => console.error(err));
//   };

//   // Delete merchant
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this merchant?")) {
//       fetch(`http://localhost:5001/deleteSpiceMerchant/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Failed to delete");
//           }
//           setMerchants((prev) => prev.filter((m) => m.id !== id));
//         })
//         .catch((err) => console.error(err));
//     }
//   };

//   return (
//     <div className="display-spice-container">
//       <h2>Spice Merchant Applications</h2>

//       <input
//         type="text"
//         placeholder="Search by name, spice, location or state"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       {filteredMerchants.length > 0 ? (
//         <div className="table-wrapper">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Spices</th>
//                 <th>Experience</th>
//                 <th>Store Location</th>
//                 <th>State</th> {/* ✅ location column */}
//                 <th>Phone</th>
//                 {(role === "ADMIN" || role === "FRANCHISE_MANAGER") && (
//                   <th>Action</th>
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMerchants.map((m) => (
//                 <tr key={m.id}>
//                   {editingMerchant === m.id ? (
//                     <>
//                       <td>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="spices"
//                           value={formData.spices}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="experience"
//                           value={formData.experience}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="storeLocation"
//                           value={formData.storeLocation}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         {/* ✅ dropdown for state */}
//                         <select
//                           name="location"
//                           value={formData.location}
//                           onChange={handleChange}
//                         >
//                           <option value="">-- Select State --</option>
//                           <option value="Tamil Nadu">Tamil Nadu</option>
//                           <option value="Kerala">Kerala</option>
//                           <option value="Karnataka">Karnataka</option>
//                           <option value="Andhra Pradesh">Andhra Pradesh</option>
//                           <option value="Telangana">Telangana</option>
//                         </select>
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="phoneNumber"
//                           value={formData.phoneNumber}
//                           onChange={handleChange}
//                         />
//                       </td>
//                       <td>
//                         {role === "ADMIN" && (
//                           <>
//                             <button
//                               className="save-btn"
//                               onClick={handleUpdate}
//                             >
//                               Save
//                             </button>
//                             <button
//                               className="cancel-btn"
//                               onClick={() => setEditingMerchant(null)}
//                             >
//                               Cancel
//                             </button>
//                           </>
//                         )}
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{m.name}</td>
//                       <td>{m.email}</td>
//                       <td>{m.spices}</td>
//                       <td>{m.experience}</td>
//                       <td>{m.storeLocation}</td>
//                       <td>{m.location}</td> {/* ✅ show state */}
//                       <td>{m.phoneNumber}</td>
//                       <td>
//                         {role === "ADMIN" && (
//                           <button
//                             className="edit-btn"
//                             onClick={() => handleEdit(m)}
//                           >
//                             Edit
//                           </button>
//                         )}
//                         {role === "FRANCHISE_MANAGER" && (
//                           <button
//                             className="delete-btn"
//                             onClick={() => handleDelete(m.id)}
//                           >
//                             Delete
//                           </button>
//                         )}
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>No merchants found</p>
//       )}
//     </div>
//   );
// }

// export default DisplaySpiceMerchant;



import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./DisplaySpiceMerchant.css";

function DisplaySpiceMerchant() {
  const [merchants, setMerchants] = useState([]);
  const [search, setSearch] = useState("");
  const [editingMerchant, setEditingMerchant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    spices: "",
    experience: "",
    location: "",
    storeLocation: "",
    phoneNumber: "",
    email: "",
  });

  const role = localStorage.getItem("role");

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredMerchants = merchants.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.spices.toLowerCase().includes(search.toLowerCase()) ||
          m.storeLocation.toLowerCase().includes(search.toLowerCase()) ||
          (m.location && m.location.toLowerCase().includes(search.toLowerCase())) // ✅ location search
      );
    
      const handleEdit = (merchant) => {
        setEditingMerchant(merchant.id);
        setFormData({ ...merchant });
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleUpdate = () => {
        fetch(`http://localhost:5001/updateSpiceMerchant/${editingMerchant}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((updated) => {
            setMerchants(
              merchants.map((m) => (m.id === updated.id ? updated : m))
            );
            setEditingMerchant(null);
          })
          .catch((err) => console.error(err));
      };
    
      // Delete merchant
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this merchant?")) {
          fetch(`http://localhost:5001/deleteSpiceMerchant/${id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("Failed to delete");
              }
              setMerchants((prev) => prev.filter((m) => m.id !== id));
            })
            .catch((err) => console.error(err));
        }
      };

  // ✅ Export spice merchants to Excel
  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(merchants);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SpiceMerchants");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "spice_merchants.xlsx");
  };

  return (
    <div className="display-spice-container">
      <h2>Spice Merchant Applications</h2>

      <div className="search-download-row">
  <input
    type="text"
    placeholder="Search by name, spice, location or state"
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


{filteredMerchants.length > 0 ? (
        <div className="table-wrapper">
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Spices</th>
              <th>Experience</th>
              <th>Store Location</th>
              <th>State</th> {/* ✅ location column */}
              <th>Phone</th>
              {(role === "ADMIN" || role === "FRANCHISE_MANAGER") && (
                <th>Action</th>
              )}
            </tr>
          </thead>

            <tbody>
            {filteredMerchants.map((m) => (
  <tr key={m.id}>
    {editingMerchant === m.id ? (
      <>
        <td>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="spices"
            value={formData.spices}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="storeLocation"
            value={formData.storeLocation}
            onChange={handleChange}
          />
        </td>
        <td>
          {/* ✅ dropdown for state */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">-- Select State --</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </td>
        {(role === "ADMIN" || role === "FRANCHISE_MANAGER") && (
          <td>
            {role === "ADMIN" && (
              <>
                <button
                  className="save-btn"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditingMerchant(null)}
                >
                  Cancel
                </button>
              </>
            )}
          </td>
        )}
      </>
    ) : (
      <>
        <td>{m.name}</td>
        <td>{m.email}</td>
        <td>{m.spices}</td>
        <td>{m.experience}</td>
        <td>{m.storeLocation}</td>
        <td>{m.location}</td>
        <td>{m.phoneNumber}</td>
        {(role === "ADMIN" || role === "FRANCHISE_MANAGER") && (
          <td>
            {role === "ADMIN" && (
              <button
                className="edit-btn"
                onClick={() => handleEdit(m)}
              >
                Edit
              </button>
            )}
            {role === "FRANCHISE_MANAGER" && (
              <button
                className="delete-btn"
                onClick={() => handleDelete(m.id)}
              >
                Delete
              </button>
            )}
          </td>
        )}
      </>
    )}
  </tr>
))}

            </tbody>
          </table>
        </div>
      ) : (
        <p>No merchants found</p>
      )}
    </div>
  );
}

export default DisplaySpiceMerchant;
