import React, { useState } from 'react';
import { Link } from 'react-router'; 
import { ArrowLeft } from 'lucide-react';
import { apiBookForm } from '../../sevices/formServices'; 

const BookForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    subject: '',
    bookingFor: '',
    numberOfLearners: '',
    preferredHoursPerWeek: '',
    preferredTeacher: '',
    levelOfLearner: '',
    paymentPlan: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: '',
      subject: '',
      bookingFor: '',
      numberOfLearners: '',
      preferredHoursPerWeek: '',
      preferredTeacher: '',
      levelOfLearner: '',
      paymentPlan: '',
      paymentMethod: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiBookForm(formData);
      alert('Booking submitted successfully!');
      resetForm();
    } catch (error) {
      console.error('Booking failed:', error);
      alert(`Booking submission failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
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
            Online Booking Teacher Form
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              type="text" 
              placeholder="First Name" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
            <input 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              type="text" 
              placeholder="Last Name" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
                placeholder="ex:kennedy@mail.com" 
                className="border border-[#6D2323] rounded-sm px-4 py-2" 
                required 
              />
              <p className="mt-2 text-[12px] text-gray-400 font-medium">example@mail.com</p>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                type="tel" 
                placeholder="(000) 000 0000" 
                className="border border-[#6D2323] rounded-sm px-4 py-2" 
                required 
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input 
              name="preferredTeacher" 
              value={formData.preferredTeacher} 
              onChange={handleChange} 
              placeholder="Preferred teacher" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
            <input 
              name="preferredHoursPerWeek" 
              value={formData.preferredHoursPerWeek} 
              onChange={handleChange} 
              placeholder="Preferred Hours Per Week" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <select 
              name="bookingFor" 
              value={formData.bookingFor} 
              onChange={handleChange} 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required
            >
              <option value="">Booking For?</option>
              <option value="self">Self</option>
              <option value="ward">Ward</option>
              <option value="other">Other</option>
            </select>
            <input 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="Subject" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <select 
              name="levelOfLearner" 
              value={formData.levelOfLearner} 
              onChange={handleChange} 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required
            >
              <option value="">Level of Learner</option>
              <option value="pre">Pre-school</option>
              <option value="primary">Primary</option>
              <option value="jhs">Junior High</option>
              <option value="shs">Senior High</option>
              <option value="tertiary">Tertiary</option>
            </select>
            <input 
              name="numberOfLearners" 
              value={formData.numberOfLearners} 
              onChange={handleChange} 
              placeholder="Number of Learners" 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <select 
              name="paymentPlan" 
              value={formData.paymentPlan} 
              onChange={handleChange} 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required
            >
              <option value="">Payment Plan</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange} 
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full" 
              required
            >
              <option value="">Payment Method</option>
              <option value="momo">Momo</option>
              <option value="card">Card</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-gray-700 font-medium">
              Location <span className="text-red-500">*</span>
            </label>
            <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              type="text" 
              className="border border-[#6D2323] rounded-sm px-4 py-2" 
              required 
            />
          </div>

          <div className='bg-[#6D2323] flex justify-center mt-6 w-full md:w-60 px-10 py-2 rounded-sm text-white cursor-pointer mx-auto'>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;