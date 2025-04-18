import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const BookForm = () => {
  return (
    <div className="min-h-screen bg-[#B6CBBD] flex justify-center items-start py-10 rounded-sm">
      <div className="bg-white p-10 rounded-sm w-full max-w-4xl">
        {/* Back Navigation */}
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

        <form>
          <div className="mt-4">
            <label className="text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#6D2323] rounded-sm px-4 py-2 w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="ex:kennedy@mail.com"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
              <p className="mt-2 text-[12px] text-gray-400 font-medium">example@mail.com</p>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(000) 000 0000"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Preferred teacher <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Preferred Hours Per Week <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Booking For? <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#6D2323] rounded-sm px-4 py-2">
                <option value="">Select Option</option>
                <option value="self">Self</option>
                <option value="ward">Ward</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Mathematics"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Level of Learner <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#6D2323] rounded-sm px-4 py-2">
                <option value="">Select Option</option>
                <option value="pre">Pre-school</option>
                <option value="primary">Primary</option>
                <option value="jhs">Junior High</option>
                <option value="shs">Senior High</option>
                <option value="tertiary">Tertiary</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Number of Learners <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#6D2323] rounded-sm px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Payment Plan <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#6D2323] rounded-sm px-4 py-2">
                <option value="">Select Option</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">
                Payment Method <span className="text-red-500">*</span>
              </label>
              <select className="border border-[#6D2323] rounded-sm px-4 py-2">
                <option value="">Select Option</option>
                <option value="momo">Momo</option>
                <option value="card">Card</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-gray-700 font-medium">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-[#6D2323] rounded-sm px-4 py-2"
            />
          </div>

          <div className='bg-[#6D2323] flex justify-center mt-6 w-full md:w-60 px-10 py-2 rounded-sm text-white cursor-pointer mx-auto'>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
