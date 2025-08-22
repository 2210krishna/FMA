import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Spice Merchant Franchise Application</h2>
      </div>
      <div className="navbar-right">
        <ul>
          {role === "GUEST" && (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/apply">FranchiseDetails</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contactus">ContactUs</Link></li>
              <li><Link to="/ourproducts">OurProducts</Link></li>
              <li><Link to="/guest-status">Application Status</Link></li>
            </>
          )}

          {role === "VENDOR" && (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/apply">FranchiseDetails</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/ourproducts">OurProducts</Link></li>
              <li><Link to="/vendor-details">Myfranchise</Link></li>
              <li><Link to="/vendor-orders">Orders</Link></li> 
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
              <li><Link to="/admin-orders">Orders</Link></li> 
            </>
          )}

          {role === "FRANCHISE_MANAGER" && (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/getAllSpiceMerchants">Spice Merchant Details</Link></li>
            </>
          )}
           {email && (
            <li className="navbar-email">Hi, {email}</li>
          )}


          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
