import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  );
}

export default DashboardLayout;
