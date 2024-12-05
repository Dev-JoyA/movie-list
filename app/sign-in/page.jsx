"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

const SignIn = () => {
  const router = useRouter(); 

  // State to store the form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    try {
      const response = await fetch("http://localhost:8001/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Sign in successful!");
        
        // Redirect to the home page after successful sign-in
        router.push("/movie-list");  
      } else {
        alert(`Error: ${result.msg}`);
      }
    } catch (error) {
      alert("An error occurred while signing in.");
    }
  };

  return (
    <div className="bg-[#093545] px-5 lg:px-80 py-10 lg:py-40 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-[#FFFFFF] font-[600] text-[32px] lg:text-[64px] text-center mb-10">Sign in</h1>
        <form className="flex flex-col gap-4 lg:mx-20" onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
