import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { apiResetPassword } from '../../sevices/authServices';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link } from 'react-router';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setIsSubmitting(true);

    try {
      await apiResetPassword({
        token,
        email: formData.email,
        newPassword: formData.password
      });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error("Password reset failed:", error);
      setError(error.response?.data?.message || "Failed to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#B6CBBD] min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-start py-20 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-full max-w-md shadow-md">
          <h2 className="text-xl font-bold text-[#6D2323] mb-6 text-center">Reset Password</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              Password reset successful! Redirecting to login...
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2"> Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm  password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#6D2323] hover:bg-[#5a1d1d] text-white py-2 rounded-md transition ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;