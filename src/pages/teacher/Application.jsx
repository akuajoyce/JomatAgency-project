import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { submitApplication } from '../../sevices/formServices';

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    specialization: '',
    startDate: '',
    coverLetter: '',
    cv: null,
    document: null,
    profileImage: null, // ✅ Added here
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      await submitApplication(payload);
      alert('Application submitted successfully ✅');
      setFormData({
        fullName: '',
        phone: '',
        location: '',
        specialization: '',
        startDate: '',
        coverLetter: '',
        cv: null,
        document: null,
        profileImage: null,
      });
    } catch (error) {
      console.error('Application submission failed:', error);
      alert('Something went wrong ❌');
    }
  };

  return (
    <div className="min-h-screen bg-[#B6CBBD] flex justify-center items-start py-10 rounded-sm">
      <div className="bg-white p-10 rounded-sm w-full max-w-4xl">
        <div className="mb-4">
          <Link to="/" className="flex items-center text-[#6D2323] hover:underline">
            <ArrowLeft className="mr-2" /> Back
          </Link>
        </div>

        <div className="border-b border-gray-200 p-6">
          <h1 className="flex justify-center text-[30px] font-bold text-[#6D2323]">
            Job Application Form
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="text-gray-700 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="(000) 000 0000"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                type="text"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Area of Specialization"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              type="date"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-medium">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
              placeholder="Write a brief cover letter..."
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-medium">Upload CV <span className="text-red-500">*</span></label>
            <input
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-medium">Upload Other Document</label>
            <input
              name="document"
              type="file"
              onChange={handleChange}
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          {/* ✅ New Profile Image Upload */}
          <div className="mt-4">
            <label className="text-gray-700 font-medium">Upload Profile Image</label>
            <input
              name="profileImage"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          <div className="bg-[#6D2323] flex justify-center mt-6 w-full md:w-60 px-10 py-2 rounded-sm text-white cursor-pointer mx-auto">
            <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
