import { apiClient } from './config';

export const apiApplication = async (formData) => {
  const data = new FormData();
  data.append("firstName", formData.firstName);
  data.append("lastName", formData.lastName);
  data.append("email", formData.email);
  data.append("phoneNumber", formData.phoneNumber);
  data.append("location", formData.location);
  data.append("specialization", formData.specialization);
  data.append("earliestPossibleStartDate", formData.earliestPossibleStartDate);
  data.append("coverLetter", formData.coverLetter);
  data.append("uploadCv", formData.uploadCv);
  data.append("uploadProfilePicture", formData.uploadProfilePicture);

  // ✅ Optional field
  if (formData.anyOtherDocumentToUpload) {
    data.append("anyOtherDocumentToUpload", formData.anyOtherDocumentToUpload);
  }

  return apiClient.post("/application/form", data);
};




export const apiBookForm = (formData) =>
  apiClient.post('/booking/form', formData);
