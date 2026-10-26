import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const submitHandler = async(e) => {

    e.preventDefault();


    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try{
      const response = await login({email,password})
      console.log(response.data)
      alert("Login Successful")
      navigate("/dashboard")
    }
    catch(error){
      console.log(error)
      alert(
        error.response?.data?.message || "Login failed"
      )
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">


      <div className="bg-white w-96 p-8 rounded-xl shadow">


        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h1>


        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>


        <form onSubmit={submitHandler}>


          <label>
            Email
          </label>


          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg mt-2 mb-4 outline-none"
            placeholder="Enter email"
          />


          <label>
            Password
          </label>


          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg mt-2 mb-5 outline-none"
            placeholder="Enter password"
          />


          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            Login
          </button>


        </form>


        <p className="text-center text-sm mt-5">

          Don't have an account?

          <Link
            to="/signup"
            className="text-purple-600 ml-1"
          >
            Signup
          </Link>

        </p>


      </div>

    </div>
  );
}

export default Login;