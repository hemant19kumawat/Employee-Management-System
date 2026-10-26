import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Dashboard from "../pages/dashboard/Dashboard";

import Employees from "../pages/employees/Employees";
import AddEmp from "../pages/employees/AddEmp";
import EditEmp from "../pages/employees/EditEmp";
import ViewEmp from "../pages/employees/ViewEmp";

import Profile from "../pages/profile/Profile";

function AppRoutes() {

  return (
    <Routes>

      {/* Open dashboard when website starts */}

      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />


      {/* Login */}

      <Route
        path="/login"
        element={<Login />}
      />


      {/* Signup */}

      <Route
        path="/signup"
        element={<Signup />}
      />


      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />


      {/* Employees */}

      <Route
        path="/employees"
        element={<Employees />}
      />


      {/* Add Employee */}

      <Route
        path="/employees/add"
        element={<AddEmp />}
      />


      {/* Edit Employee */}

      <Route
        path="/employees/edit/:id"
        element={<EditEmp />}
      />


      {/* Employee Details */}

      <Route
        path="/employees/:id"
        element={<ViewEmp />}
      />


      {/* Profile */}

      <Route
        path="/profile"
        element={<Profile />}
      />


      {/* Unknown URL */}

      <Route
        path="*"
        element={<Navigate to="/dashboard" />}
      />

    </Routes>
  );
}

export default AppRoutes;