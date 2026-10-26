import React, { useState,useEffect } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { getEmployee,updateEmployee } from "../../services/employeeService";

function EditEmp() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  contact: "",
  department: "",
  designation: "",
  salary: ""
  })

  useEffect(() => {
  loadEmployee();
}, []);

const loadEmployee = async () => {

  try {

    const response = await getEmployee(id);

    setFormData(response.data);

  } catch (error) {

    console.log(error);

  }

};



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await updateEmployee(id, formData);

    alert("Employee updated successfully");

    navigate("/employees");

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message || "Failed to update employee"
    );

  }
};


  return (
    <MainLayout>

      <h1 className="text-2xl font-bold mb-6">
        Edit Employee
      </h1>


      <div className="bg-white p-6 rounded-xl shadow-sm">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <div>

            <label className="block mb-2">
              Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>


          <div>

            <label className="block mb-2">
              Email
            </label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>


          <div>

            <label className="block mb-2">
              Contact
            </label>

            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>


          <div>

            <label className="block mb-2">
              Department
            </label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >

              <option value="IT">
                IT
              </option>

              <option value="HR">
                HR
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Marketing">
                Marketing
              </option>

            </select>

          </div>


          <div>

            <label className="block mb-2">
              Designation
            </label>

            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>


          <div>

            <label className="block mb-2">
              Salary
            </label>

            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>


          <div className="col-span-2">

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg"
            >
              Update Employee
            </button>

          </div>

        </form>

      </div>

    </MainLayout>
  );
}

export default EditEmp;