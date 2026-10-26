import React from "react";
import { Pencil, Trash2 } from "lucide-react";

function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Department</th>
            <th className="p-4">Designation</th>
            <th className="p-4">Salary</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id} className="border-t">
              <td className="p-4">{employee.name}</td>

              <td className="p-4">{employee.email}</td>

              <td className="p-4">{employee.department}</td>

              <td className="p-4">{employee.designation}</td>

              <td className="p-4">₹{employee.salary}</td>

              <td className="p-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(employee._id)}
                    className="text-blue-500"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(employee._id)}
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
