import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Spice Merchant Franchise Application</h2>
      <ul>
        {role === "GUEST" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/apply">FranchiseDetails</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
            <li><Link to="/ourproducts">OurProducts</Link></li>
          </>
        )}

        {role === "VENDOR" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/apply">FranchiseDetails</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ourproducts">OurProducts</Link></li>
          </>
        )}

        {role === "EVALUATOR" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/evaluatortable">Evaluator Table</Link></li>
            <li><Link to="/getAllSpiceMerchants">Spice Merchant Details</Link></li>
          </>
        )}

        {role === "TERRITORY_MANAGER" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/territorytable">Territory Table</Link></li>
            <li><Link to="/getAllSpiceMerchants">Spice Merchant Details</Link></li>
          </>
        )}

        {role === "ADMIN" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/getAllSpiceMerchants">Spice Merchant Details</Link></li>
            <li><Link to="/employees">Employee Management</Link></li>
          </>
        )}

        {role === "FRANCHISE_MANAGER" && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/getAllSpiceMerchants">Spice Merchant Details</Link></li>
          </>
        )}

        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
