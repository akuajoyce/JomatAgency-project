// src/services/authServices.js
import { apiClient } from "./config";

/**
 * User Signup/Register
 * @param {Object} formData - User registration form data
 */
export const apiSignup = async (formData) => {
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    role: formData.role, // role is renamed to "option" for backend
    password: formData.password,
    confirmPassword: formData.confirmPassword, // ✅ Add this!
  };

  return apiClient.post("/user/register", payload);
};

/**
 * User Login
 * @param {Object} credentials - { email, password }
 */
export const apiLogin = async ({ email, password }) => {
  return apiClient.post("/user/login", { email, password });
};

/**
 * Reset Password
 * @param {Object} payload - { email, newPassword }
 */
export const apiResetPassword = async ({ email,password,confirmPassword }) => {
  return apiClient.post("/user/reset-password", { email,password,confirmPassword });
};
