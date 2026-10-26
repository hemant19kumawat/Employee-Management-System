import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getEmployee, deleteEmployee as deleteEmployeeApi } from "../../services/employeeService";


function ViewEmp() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  
    useEffect(() => {
      loadEmployee();
    }, []);

  const loadEmployee = async () => {
    try {
      const response = await getEmployee(id);
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!employee) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  const deleteHandler = async () => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (!confirmDelete) {
    return;
  }

  try {

    await deleteEmployeeApi(id);

    alert("Employee deleted successfully");

    navigate("/employees");

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Failed to delete employee"
    );

  }
};

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Employee Details</h1>

          <p className="text-gray-500">Employee ID: {id}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center border-b pb-5">
          <div>
            <h2 className="text-xl font-bold">{employee.name}</h2>

            <p className="text-gray-500">{employee.designation}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/employees/edit/${id}`)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={deleteHandler}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div>
            <p className="text-gray-500">Email</p>

            <p className="font-medium">{employee.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Contact</p>

            <p className="font-medium">{employee.contact}</p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>

            <p className="font-medium">{employee.department}</p>
          </div>

          <div>
            <p className="text-gray-500">Designation</p>

            <p className="font-medium">{employee.designation}</p>
          </div>

          <div>
            <p className="text-gray-500">Salary</p>

            <p className="font-medium">₹{employee.salary}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewEmp;
