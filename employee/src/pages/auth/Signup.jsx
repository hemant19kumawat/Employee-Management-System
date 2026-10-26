import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/authService";

function Signup() {

  const navigate = useNavigate();


  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const submitHandler = async(e) => {
    e.preventDefault();

    if (!name || !email || !password) {

      alert("Please fill all fields");

      return;
    }
    try{
      await signup({
        name,
        email,
        password
      })
      alert("Signup successful")
      navigate("/login")
    }
    catch(error){
      console.log(error)
      alert(
        error.response?.data?.message || "Signup failed"
      )
    }
  }
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">


      <div className="bg-white w-96 p-8 rounded-xl shadow">


        <h1 className="text-2xl font-bold text-center mb-2">
          Create Account
        </h1>


        <p className="text-center text-gray-500 mb-6">
          Signup to continue
        </p>


        <form onSubmit={submitHandler}>


          <label>
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full border p-3 rounded-lg mt-2 mb-4"
          />


          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full border p-3 rounded-lg mt-2 mb-4"
          />


          <label>
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full border p-3 rounded-lg mt-2 mb-5"
          />


          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            Signup
          </button>


        </form>


        <p className="text-center text-sm mt-5">

          Already have an account?

          <Link
            to="/login"
            className="text-purple-600 ml-1"
          >
            Login
          </Link>

        </p>


      </div>

    </div>

  );
}

export default Signup;