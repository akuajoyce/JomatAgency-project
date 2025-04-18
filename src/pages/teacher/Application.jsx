import React from "react";

const Application = () => {
  return (
    <div className="min-h-screen bg-[#B6CBBD] flex justify-center items-start py-10 px-4">
      <div className="bg-white p-6 md:p-10 rounded-sm w-full md:w-[80%] lg:w-[60%]">
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-[#6D2323]">
            Job Application Form
          </h1>
          <p className="text-center text-gray-600 text-sm md:text-base">
            Please Fill Out the Form Below to Submit Your Job Application!
          </p>
        </div>

        <form>
          <div className="mt-6">
            <label className="text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full text-[#6D2323]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full text-[#6D2323]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="ex: kennedy@mail.com"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full mt-2 text-[#6D2323]"
              />
              <p className="mt-1 text-xs text-gray-400 font-medium">
                example@mail.com
              </p>
            </div>

            <div className="flex-1">
              <label className="text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(000) 000 0000"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full mt-2 text-[#6D2323]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-gray-700 font-medium">
                Applied Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full mt-2 text-[#6D2323]"
              />
            </div>

            <div className="flex-1">
              <label className="text-gray-700 font-medium">
                Earliest Possible Start Date
                <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="border border-[#6D2323] rounded-sm px-4 py-2 w-full mt-2  text-[#6D2323]"
              />
              <p className="mt-1 text-xs text-gray-400 font-medium">Date</p>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-medium">Cover Letter</label>
            <textarea
              rows="4"
              className="w-full mt-2 px-4 py-2 rounded-sm bg-[#B6CBBD] border border-[#6D2323] resize-none text-[#6D2323]"
              maxLength="200"
            ></textarea>
            <p className="mt-1 text-xs text-gray-400 font-medium">
              Please do not exceed 200 words
            </p>
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-medium">
              Upload CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              required
              className="border border-[#6D2323] rounded-sm px-4 py-2 mt-2 w-full cursor-pointer text-[#6D2323]"
            />
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-medium">
              Any Other Documents to Upload
            </label>
            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .png"
              multiple
              className="border border-[#6D2323] rounded-sm px-4 py-2 mt-2 w-full cursor-pointer text-[#6D2323]"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#6D2323] text-white px-8 py-2 rounded-sm hover:bg-[#842b2b] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
