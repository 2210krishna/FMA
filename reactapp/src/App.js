import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ApplyForm from "./components/ApplyForm";
import DisplaySpiceMerchant from "./components/DisplaySpiceMerchant";
import EvaluatorTable from "./components/EvaluatorTable";
import TerritoryTable from "./components/TerritoryTable";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import OurProducts from "./components/OurProducts";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./components/WelcomePage";
import EmployeeTable from "./components/EmployeeTable";
import GuestStatus from "./components/GuestStatus";
function AppContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="app">
      {isLoggedIn && !["/", "/login", "/register"].includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <ProtectedRoute allowedRoles={["GUEST","VENDOR","ADMIN","TERRITORY_MANAGER","EVALUATOR","FRANCHISE_MANAGER"]}>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path="/apply" element={
          <ProtectedRoute allowedRoles={["GUEST","VENDOR"]}>
            <ApplyForm />
          </ProtectedRoute>
        }/>
        <Route path="/getAllSpiceMerchants" element={
          <ProtectedRoute allowedRoles={["ADMIN","TERRITORY_MANAGER","EVALUATOR","FRANCHISE_MANAGER"]}>
            <DisplaySpiceMerchant />
          </ProtectedRoute>
        }/>
        <Route path="/evaluatortable" element={
          <ProtectedRoute allowedRoles={["EVALUATOR"]}>
            <EvaluatorTable />
          </ProtectedRoute>
        }/>
        <Route path="/territorytable" element={
          <ProtectedRoute allowedRoles={["TERRITORY_MANAGER"]}>
            <TerritoryTable />
          </ProtectedRoute>
        }/>
        <Route path="/about" element={
          <ProtectedRoute allowedRoles={["GUEST","VENDOR"]}>
            <About />
          </ProtectedRoute>
        }/>
        <Route path="/ourproducts" element={
          <ProtectedRoute allowedRoles={["GUEST","VENDOR"]}>
            <OurProducts />
          </ProtectedRoute>
        }/>
        <Route path="/contactus" element={
          <ProtectedRoute allowedRoles={["GUEST","VENDOR"]}>
            <ContactUs />
          </ProtectedRoute>
  
        }/>
          <Route path="/employees" element={
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <EmployeeTable />
        </ProtectedRoute>
        }/>
        <Route path="/guest-status" element={
        <ProtectedRoute allowedRoles={["GUEST"]}>
          <GuestStatus />
        </ProtectedRoute>
        }/>
          </Routes>

      {isLoggedIn && !["/", "/login", "/register"].includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
