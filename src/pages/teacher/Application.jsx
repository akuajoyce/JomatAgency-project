import React from "react";

const Application = () => {
  return (
    <div className="min-h-screen  bg-[#B6CBBD] flex justify-center items-start py-10 rounded-sm">
      <div className="bg-white p-10 rounded-sm w-[60%]">
        <div className="border-b border-gray-200 p-6">
          <h1 className="flex justify-center text-[30px] font-bold">
            Job Application Form{" "}
          </h1>
          <p className="flex justify-center">
            Please Fill Out the Form Below to Submit Your Job Application!
          </p>
        </div>

        <form>
          <div className="mt-4">
            <label className="text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-200 rounded-sm px-20 py-2"
            />

            <input
              type="text"
              placeholder="Last Name"
              className=" border border-gray-200 rounded-sm px-20 py-2"
            />
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="ex:kennedy@mail.com"
                  className="border border-gray-200 rounded-sm px-20 py-2"
                />

                <p className="mt-2 text-[12px] text-gray-400 font-medium">
                  example@mail.com
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="(000) 000 0000"
                  className="border border-gray-200 rounded-sm px-20 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Applied Position<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-sm px-20 py-2">
                <input type="text" className="" />
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Earliest Possible Start Date
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-sm px-25 py-2">
                <input type="date" className="text-gray-600" />
              </div>
              <p className="mt-2 text-[12px] text-gray-400 font-medium">Date</p>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Preferred Interview Date
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-sm px-25 py-2">
                <input type="date" className="text-gray-600" />
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Preferred Interview Time
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-sm px-30 py-2">
                <input type="time" className="text-gray-600 " />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-medium">Cover Letter</label>
          </div>

          <textarea
            name=""
            id=""
            rows="4"
            className="px-20 bg-gray-100 border-white"
          ></textarea>
          <p className="mt-2 text-[12px] text-gray-400 font-medium">
            Please do not exceed 200 words
          </p>

          <div className="mt-2">
            <label  className="text-gray-700 font-medium">
              Upload CV<span className="text-red-500">*</span>
            </label>
          </div>

          <div  className="border border-gray-200 rounded-sm px-20 py-2">
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              required
              className="cursor-pointer"
              id="cvUpload"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-medium">Any Other Documents to Upload</label>
          </div>

          <div className="border border-gray-200 rounded-sm px-20 py-2  ">
            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .png"
              multiple
              className="cursor-pointer"
              id="otherDocs"
            />
          </div>

         <div  className="bg-blue-900 flex justify-center mt-4 w-60 px-10 py-2 rounded-sm text-white cursor-pointer">
         <button className="">Submit</button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
