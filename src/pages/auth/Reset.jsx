import React from 'react'

const Reset = () => {
  return (
    <div>
      <div className="min-h-screen  bg-[#B6CBBD] flex justify-center items-start py-20 rounded-sm">
       <form className="bg-white p-10 rounded-sm w-[60%] h-[50vh]">

        <div>
        <input type="email" 
        placeholder='Email mail@site'
        className='border border-gray-300 rounded-sm px-20 py-2 mb-4 ml-50' />
        </div>

        <div>
        <input type="password" 
        placeholder='New Password'
        className='border border-gray-300 rounded-sm px-20 py-2 mb-4 ml-50' />
        </div>

        <div>
        <input type="password" 
        placeholder='Confirm Password'
        className='border border-gray-300 rounded-sm px-20 py-2 mb-4 ml-50' />
        </div>

        <div className='bg-blue-900 flex justify-center mt-4 w-60 px-10 py-2 rounded-sm text-white ml-50 cursor-pointer' >
         <button>
          Reset
         </button>
        </div>

       </form>
      </div>
    </div>
  )
}

export default Reset