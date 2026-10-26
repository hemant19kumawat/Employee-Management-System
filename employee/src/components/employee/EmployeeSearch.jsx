import React from "react";

function EmployeeSearch({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search employee..."
      className="border px-4 py-2 rounded-lg w-80 outline-none"
    />
  );
}

export default EmployeeSearch;