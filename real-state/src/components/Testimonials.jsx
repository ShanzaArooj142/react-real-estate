import React from 'react'

const Testimonials = () => {
  return (
    <div className='py-20 bg-white'>
     <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">
            Customer Testimonials
        </h2>
        <p className="text-gray-700 mt-3 text-md">
            Real Stories from Those Who Found Home with Us
        </p>
     </div>
     
     <div className='flex justify-center gap-4 ml-6 mr-6'>
           <div className="w-[360px] bg-white h-[260px] shadow-md rounded-lg p-8 hover:shadow-lg ">
        <div className="flex items-center gap-4 mb-6">
        <img src="/img9.png" alt="" className="w-12 h-12  rounded-full object-cover"/>

       <div>
         <h3 className="text-lg font-semibold">
          Donald Jackman
         </h3>

          <p className="text-gray-500 text-sm">
          Marketing Manager
          </p>
       </div>

      </div>
      <p className="text-gray-700 text-[13px]">
       From the very first meeting, they understood <br />
      my vision and helped me find the perfect <br />
      property. Their attention to detail and <br />
       commitment to client satisfaction is <br />
     unmatched.
      </p>

     <div className="text-yellow-400 text-xs mt-2">
     ★★★★★
     </div>

     </div>
      


       <div className="w-[360px] bg-white h-[260px] shadow-md rounded-lg p-8 hover:shadow-lg ">
        <div className="flex items-center gap-4 mb-6">
        <img src="/img10.png" alt="" className="w-12 h-12  rounded-full object-cover"/>

       <div>
         <h3 className="text-lg font-semibold">
          Donald Jackman
         </h3>

          <p className="text-gray-500 text-sm">
          Marketing Manager
          </p>
       </div>

      </div>
      <p className="text-gray-700 text-[13px]">
       From the very first meeting, they understood <br />
      my vision and helped me find the perfect <br />
      property. Their attention to detail and <br />
       commitment to client satisfaction is <br />
     unmatched.
      </p>

     <div className="text-yellow-400 text-xs mt-2">
     ★★★★☆
     </div>

     </div>
     




       <div className="w-[360px] bg-white h-[260px] shadow-md rounded-lg p-8 hover:shadow-lg ">
        <div className="flex items-center gap-4 mb-6">
        <img src="/img11.png" alt="" className="w-12 h-12  rounded-full object-cover"/>

       <div>
         <h3 className="text-md font-semibold">
          James Washington
         </h3>

          <p className="text-gray-500 text-sm">
          Co-Founder
          </p>
       </div>

      </div>
      <p className="text-gray-700 text-[13px]">
       From the very first meeting, they understood <br />
      my vision and helped me find the perfect <br />
      property. Their attention to detail and <br />
       commitment to client satisfaction is <br />
     unmatched.
      </p>

     <div className="text-yellow-400 text-xs mt-2">
     ★★★★★
     </div>

     </div>




     </div>
    </div>
  )
}

export default Testimonials
