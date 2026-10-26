import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  
  const [dashboard, setDashboard] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("http://localhost:6060/api/dashboard");

      setDashboard(response.data);
    } catch (error) {
      console.error("Dashboard APi Error:",error);

      setError(
        error.response?.data?.message ||
        error.message ||
        "Failed to load dashboard"
      );
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error){
    return (
      <div classname="p-6 text-red-500">
        Dashboard Error:{error}
      </div>
    )
  }

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <p className="text-gray-500">Welcome back, Admin</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-5 mb-6">
        {/* Total Employees */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Employees</p>

          <h2 className="text-3xl font-bold mt-2">
            {dashboard.totalEmployees}
          </h2>

          <p className="text-green-500 text-sm mt-2">Total employees</p>
        </div>

        {/* Departments */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Departments</p>

          <h2 className="text-3xl font-bold mt-2">{dashboard.departments}</h2>

          <p className="text-green-500 text-sm mt-2">Total departments</p>
        </div>

        {/* Total Users */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Users</p>

          <h2 className="text-3xl font-bold mt-2">{dashboard.totalUsers}</h2>

          <p className="text-green-500 text-sm mt-2">Total users</p>
        </div>

        {/* Average Salary */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500">Average Salary</p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{dashboard.averageSalary.toLocaleString("en-IN")}
          </h2>

          <p className="text-green-500 text-sm mt-2">Average salary</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Department */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-5">
            Employees by Department
          </h2>

          <div className="space-y-5">
            {dashboard.departmentData.map((department, index) => {
              // Find highest employee count
              const maxCount = Math.max(
                ...dashboard.departmentData.map((item) => item.count),
              );

              // Calculate progress bar width
              const width = (department.count / maxCount) * 100;

              // Different colors for bars
              const colors = [
                "bg-blue-500",
                "bg-green-500",
                "bg-yellow-500",
                "bg-purple-500",
              ];

              return (
                <div key={department._id}>
                  <div className="flex justify-between">
                    <span>{department._id}</span>

                    <span>{department.count}</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded mt-1">
                    <div
                      className={`h-2 rounded ${colors[index % colors.length]}`}
                      style={{
                        width: `${width}%`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Employees */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-5">Recent Employees</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3">Name</th>

                <th className="pb-3">Department</th>

                <th className="pb-3">Designation</th>
              </tr>
            </thead>

            <tbody>
              {dashboard.recentEmployees.map((employee) => (
                <tr key={employee._id} className="border-b">
                  <td className="py-3">{employee.name}</td>

                  <td>{employee.department}</td>

                  <td>{employee.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
