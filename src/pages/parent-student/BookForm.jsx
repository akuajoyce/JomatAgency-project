import React from 'react'

const BookForm = () => {
  return (
    <div className="min-h-screen  bg-[#B6CBBD] flex justify-center items-start py-10 rounded-sm">
        <div className="bg-white p-10 rounded-sm w-[60%]">
            <div  className="border-b border-gray-200 p-6">
                <h1 className="flex justify-center text-[30px] font-bold">Online Booking Teacher Form</h1>
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
              className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
            />

            <input
              type="text"
              placeholder="Last Name"
              className=" border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
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
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
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
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Preferred teacher <span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="email"
                  placeholder=""
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
                />

                
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Preferred Hours Per Week <span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="hours"
                  placeholder=""
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Booking For?<span className="text-red-500">*</span>
                </label>
              </div>

              <select name='person' className="border border-gray-200  hover:border-amber-600 rounded-sm px-28 py-2">
               <option value="">Select Option</option>
               <option value="">Self</option>
               <option value="">Ward</option>
               <option value="">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Subject<span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ex: Mathematics"
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Level of Learner<span className="text-red-500">*</span>
                </label>
              </div>

              <select name='person' className="border border-gray-200  hover:border-amber-600 rounded-sm px-28 py-2">
               <option value="">Select Option</option>
               <option value="">Pre-school</option>
               <option value="">Primary</option>
               <option value="">Junior High</option>
               <option value="">Senior High</option>
               <option value="">Tertiary</option>
               
              </select>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Number of Learners<span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-200  hover:border-amber-600 rounded-sm px-20 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Payment Plan<span className="text-red-500">*</span>
                </label>
              </div>

              <select name='method' className="border border-gray-200  hover:border-amber-600 rounded-sm px-28 py-2">
               <option value="">Select Option</option>
               <option value="">Weekly</option>
               <option value="">Monthly</option>
              </select>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Payment Method<span className="text-red-500">*</span>
                </label>
              </div>

              <select name='method' className="border border-gray-200  hover:border-amber-600 rounded-sm px-28 py-2">
               <option value="">Select Option</option>
               <option value="">Momo</option>
               <option value="">Card</option>
               <option value="">Bank Transfer</option>
              </select>
            </div>
          </div>

          
          <div className="flex flex-col">
              <div>
                <label className="text-gray-700 font-medium">
                  Location<span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-200 hover:border-amber-600 rounded-sm px-20 py-2"
                />
              </div>
            </div>

           <div className='bg-blue-900 flex justify-center mt-4 w-60 px-10 py-2 rounded-sm text-white ml-50 cursor-pointer' >
            <button>
             Submit
            </button>
           </div>



          
           

            </form>
        </div>
    </div>
  )
}

export default BookForm