import React, { useEffect, useState } from "react";

function DisplaySpiceMerchant() {
  const [merchants, setMerchants] = useState([]);
  const [search, setSearch] = useState("");
  const [editingMerchant, setEditingMerchant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    spices: "",
    experience: "",
    storeLocation: "",
    phoneNumber: ""
  });

  useEffect(() => {
    fetch("http://localhost:5001/getAllSpiceMerchants")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter merchants based on search input
  const filteredMerchants = merchants.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.spices.toLowerCase().includes(search.toLowerCase()) ||
    m.storeLocation.toLowerCase().includes(search.toLowerCase())
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
      body: JSON.stringify(formData)
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

  return (
    <div>
      <h2>Spice Merchant Applications</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name, spice, or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      {filteredMerchants.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Spices</th>
              <th>Experience</th>
              <th>Store Location</th>
              <th>Phone</th>
              <th>Action</th>
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
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdate}>Save</button>
                      <button onClick={() => setEditingMerchant(null)}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{m.name}</td>
                    <td>{m.spices}</td>
                    <td>{m.experience}</td>
                    <td>{m.storeLocation}</td>
                    <td>{m.phoneNumber}</td>
                    <td>
                      <button onClick={() => handleEdit(m)}>Edit</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No merchants found</p>
      )}
    </div>
  );
}

export default DisplaySpiceMerchant;
