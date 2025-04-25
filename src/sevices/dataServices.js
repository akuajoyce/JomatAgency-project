import { apiClient } from './config';

// Fetch all teachers
export const getAllTeachers = async () => {
  return apiClient.get('/profiles');
};

// Fetch individual teacher details
export const getTeacherById = async (teacherId) => {
  return apiClient.get(`/profiles/${teacherId}`);
};



// Fetch dashboard data (for teacher)
export const getTeacherDashboard = async (teacherId) => {
  return apiClient.get(`/teachers/${teacherId}/overview`);
};


