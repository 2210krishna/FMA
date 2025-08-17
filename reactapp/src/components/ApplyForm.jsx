import React, { useState } from "react";
import './ApplyForm.css';

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    spices: "",
    experience: "",
    storeLocation: "",
    phoneNumber: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const namePattern = /^[a-zA-Z\s]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.name) newErrors.name = "Name is required";
    else if (!namePattern.test(formData.name.trim()))
      newErrors.name = "Name must not contain special characters or numbers";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.spices) newErrors.spices = "Spices are required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.storeLocation)
      newErrors.storeLocation = "Store location is required";

    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    else if (!phonePattern.test(formData.phoneNumber.trim()))
      newErrors.phoneNumber = "Phone number must contain exactly 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const guestId = localStorage.getItem("userId");

    try {
      await fetch(`http://localhost:5001/evaluator/apply?guestId=${guestId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setSuccessMessage("✅ Application submitted successfully!");
      setFormData({ name: "", spices: "", experience: "", storeLocation: "", phoneNumber: "", email: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="apply-page">
      <h2 className="apply-title">Apply to Get a Franchise</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Spices:</label>
        <input name="spices" value={formData.spices} onChange={handleChange} placeholder="Enter spices, comma separated" />
        {errors.spices && <p className="error">{errors.spices}</p>}

        <label>Experience:</label>
        <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience in years" />
        {errors.experience && <p className="error">{errors.experience}</p>}

        <label>Store Location:</label>
        <input name="storeLocation" value={formData.storeLocation} onChange={handleChange} placeholder="Enter store location" />
        {errors.storeLocation && <p className="error">{errors.storeLocation}</p>}

        <label>Phone Number:</label>
        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter phone number" />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        <button type="submit">Submit Application</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default ApplyForm;
