import React, { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getEmployees, deleteEmployee } from "../../services/employeeService";

function Employees() {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  // GET all employees from backend

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();

      console.log(response.data.emp);

      setEmployees(response.data.emp);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to load employees");
    }
  };

  // DELETE employee

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteEmployee(id);

      alert("Employee deleted successfully");

      // Reload employees after delete

      loadEmployees();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to delete employee");
    }
  };

  // Search

  const filteredEmployees = employees.filter((employee) =>
    employee.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MainLayout>
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Employees</h1>

          <p className="text-gray-500">Manage your employees</p>
        </div>

        <Link
          to="/employees/add"
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Add Employee
        </Link>
      </div>

      {/* Search */}

      <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employee..."
          className="border px-4 py-2 rounded-lg w-80 outline-none"
        />
      </div>

      {/* Employee Table */}

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
            {filteredEmployees.map((employee) => (
              <tr key={employee._id || employee.id} className="border-t">
                <td className="p-4 font-medium">{employee.name}</td>

                <td className="p-4">{employee.email}</td>

                <td className="p-4">{employee.department}</td>

                <td className="p-4">{employee.designation}</td>

                <td className="p-4">₹{employee.salary}</td>

                <td className="p-4">
                  <div className="flex gap-3">
                    {/* View */}

                    <button
                      onClick={() =>
                        navigate(`/employees/${employee._id || employee.id}`)
                      }
                      className="text-green-500"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Edit */}

                    <button
                      onClick={() =>
                        navigate(
                          `/employees/edit/${employee._id || employee.id}`,
                        )
                      }
                      className="text-blue-500"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}

                    <button
                      onClick={() => handleDelete(employee._id || employee.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default Employees;
