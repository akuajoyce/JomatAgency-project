import { apiClient } from "./config";



export const apiApplication = async (formData) => {
  try {
    // Transform field names to match backend expectations
    const transformedData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      specialization: formData.specialization,
      earliestPossibleStartDate: formData.earliestPossibleStartDate,
      coverLetter: formData.coverletter || formData.coverLetter, // Handle both cases
      uploadCv: formData.uploadCv,
      uploadProfilePicture: formData.uploadProfilePicture,
      anyOtherDocumentToUpload: formData.anyOtherDocumentTolUpload || formData.anyOtherDocumentToUpload
    };

    // Validate required fields
    const requiredFields = {
      firstName: "First name is required",
      lastName: "Last name is required",
      // ... other fields ...
    };

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!transformedData[field] || 
          (typeof transformedData[field] === 'string' && !transformedData[field].trim())) {
        throw new Error(message);
      }
    });

    const data = new FormData();
    Object.entries(transformedData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        data.append(key, value);
      }
    });

    const response = await apiClient.post("/application/form", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Full error details:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

// 2. For STUDENT BOOKING FORM (text-only)
export const apiBookForm = async (formData) => {
  // First validate required fields
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "location",
    "subject",
    "bookingFor",
    "numberOfLearners",
    "preferredHoursPerWeek",
    "preferredTeacher",
    "levelOfLearner",
    "paymentPlan",
    "paymentMethod",
  ];

  const missingFields = requiredFields.filter((field) => !formData[field]);
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  return apiClient.post("/booking/form", formData, {
    headers: {
      "Content-Type": "application/json", // Optimal for text data
    },
  });
};
