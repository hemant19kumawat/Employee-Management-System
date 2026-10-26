import React from "react";

function EmployeeFilter({ onDepartmentChange }) {
  return (
    <select
      onChange={(e) => onDepartmentChange(e.target.value)}
      className="border px-4 py-2 rounded-lg"
    >
      <option value="">All Departments</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
      <option value="Marketing">Marketing</option>
    </select>
  );
}

export default EmployeeFilter;