import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { createEmployee } from "../../services/employeeService";

function AddEmp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    department: "",
    designation: "",
    salary: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async(e) => {

    e.preventDefault();


    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.department ||
      !formData.designation ||
      !formData.salary
    ) {

      alert("Please fill all fields");

      return;
    }
    try{
      await createEmployee(formData)
      alert("Employee added successfully")
      navigate("/employees")
    }
    catch(error){
      console.log(error)
      alert(
        error.response?.data?.message || "Failed to add employee"
      )
    }
  };


  return (
    <MainLayout>

      <h1 className="text-2xl font-bold mb-6">
        Add Employee
      </h1>


      <div className="bg-white p-6 rounded-xl shadow-sm">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          {/* Name */}

          <div>

            <label className="block mb-2">
              Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>


          {/* Email */}

          <div>

            <label className="block mb-2">
              Email
            </label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>


          {/* Contact */}

          <div>

            <label className="block mb-2">
              Contact
            </label>

            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              type="text"
              placeholder="Enter contact"
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>


          {/* Department */}

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

              <option value="">
                Select Department
              </option>

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


          {/* Designation */}

          <div>

            <label className="block mb-2">
              Designation
            </label>

            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              type="text"
              placeholder="Enter designation"
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>


          {/* Salary */}

          <div>

            <label className="block mb-2">
              Salary
            </label>

            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              type="number"
              placeholder="Enter salary"
              className="w-full border p-3 rounded-lg outline-none"
            />

          </div>


          {/* Button */}

          <div className="col-span-2">

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg"
            >
              Save Employee
            </button>

          </div>

        </form>

      </div>

    </MainLayout>
  );
}

export default AddEmp;