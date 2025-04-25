import { apiClient } from './config';

export const submitApplication = (formData) =>
  apiClient.post('/application/form', formData);

export const submitBooking = (formData) =>
  apiClient.post('/booking/form', formData);
