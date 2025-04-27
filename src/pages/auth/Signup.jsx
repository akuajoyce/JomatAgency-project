import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import Navbar from "../../assets/components/Navbar";
import Footer from "../../assets/components/Footer";
import { ArrowLeft } from "lucide-react";
import { apiSignup } from "../../sevices/authServices";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    option: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await apiSignup(formData);
      console.log("Signup success:", response);
      alert("Signup successful!");

      if (formData.role === "teacher") {
        navigate("/teacher/Application");
      } else if (formData.role === "learner") {
        navigate("/profiles");
      }
    } catch (error) {
      console.error("Signup failed");
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#B6CBBD] flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-white w-full max-w-4xl mx-auto mt-4 p-6 rounded-md shadow-md flex-1">
        <div className="mb-4">
          <Link
            to="/"
            className="flex items-center text-[#6D2323] hover:underline w-fit"
          >
            <ArrowLeft className="mr-2" />
            Back
          </Link>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#6D2323]">
            Create An Account
          </h1>
          <p className="font-light">Enter Your Details Below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-end text-sm sm:text-base gap-2 pr-6">
            <span className="text-[#6D2323]">Already Have Account?</span>
            <Link
              to="/Login"
              className="text-[#6D2323] underline cursor-pointer"
            >
              Login
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2"
              required
            />
          </div>

          <div className="flex justify-center px-4">
            <input
              type="email"
              name="email"
              placeholder="Email mail@site.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-2/3"
              required
            />
          </div>

          <div className="flex justify-center px-4">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-2/3 mt-2"
              required
            >
              <option value="">Select Option</option>
              <option value="teacher">Teacher</option>
              {/* <option value="parent-student">Parent/student</option> */}
              <option value="learner">Learner</option>
              
            </select>
          </div>

          <div className="flex justify-center px-4">
            <button
              type="submit"
              className="bg-[#6D2323] text-white px-6 py-3 rounded-sm w-full sm:w-2/3 mt-4"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
