"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

const SignUp = () => {
  const router = useRouter(); 

  
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    try {
      const response = await fetch("http://localhost:8001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Sign up successful! A confirmation email has been sent.");
        
        // Redirect to the Sign In page after successful sign-up
        router.push("/sign-in");  
      } else {
        alert(`Error: ${result.msg}`);
      }
    } catch (error) {
      alert("An error occurred while signing up.");
    }
  };

  return (
    <div className="bg-[#093545] px-5 lg:px-80 py-10 lg:py-20 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-[#FFFFFF] font-[400] text-[22px] lg:text-[34px] text-center mb-10">Sign up</h1>
        <form className="flex flex-col gap-4 lg:mx-20" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="bg-[#224957] text-[#FFFFFF] py-3 px-4 rounded-lg font-[400] text-[14px] w-full mb-2"
          />
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
            className="bg-[#224957] text-[#FFFFFF] py-3 px-4 rounded-lg font-[400] text-[14px] w-full mb-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-[#224957] text-[#FFFFFF] py-3 px-4 rounded-lg font-[400] text-[14px] w-full mb-2"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-[#224957] text-[#FFFFFF] py-3 px-4 rounded-lg font-[400] text-[14px] w-full mb-5"
          />
          <button
            className="bg-[#2BD17E] text-[#FFFFFF] py-3 rounded-lg font-[700] text-[16px] w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-4 lg:mx-20">
        <p>Already have an account?</p>
        <button
          className="bg-[#2BD17E] text-[#FFFFFF] py-3 rounded-lg font-[700] text-[16px] w-full"
          type="submit"
          onClick={() => router.push("/sign-in")} 
        >
          Login
        </button>
        <p>or</p>
        <h2>Sign Up with Google</h2>
        <button
          className="bg-[#2BD17E] text-[#FFFFFF] py-3 rounded-lg font-[700] text-[16px] w-full"
          type="submit"
        >
          Google sign-in
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
