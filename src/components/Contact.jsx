import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white py-20 px-24'>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact With Us
         </h2>

          <p className="text-gray-700 text-lg mt-4">
            Ready to Make a Move? Let's Build Your Future Together
         </p>
        </div>

        <div className='flex justify-center mt-14'>
            <div className='w-[740px] h-[520px] bg-white rounded-lg shadow-lg p-3'>
                <h3 className="text-2xl font-semibold mb-8">
                  Get in Touch
                </h3>
                <label className="block text-gray-700 text-[14px] mb-2 text-sm">
                  Full Name
                </label>
                <input type="text"placeholder="Enter your name" className="w-full h-10 border border-gray-300 rounded px-4 outline-none focus:border-blue-500 mb-6 text-xs"></input>

                <label className="block text-gray-700 mb-2 text-sm">
                   Email Address
                </label>

                <input type="email" placeholder="Enter your email" className="w-full h-10 border border-gray-300 rounded px-4 outline-none focus:border-blue-500 mb-6 text-xs"></input>

                <label className="block text-gray-700 mb-2 text-sm">
                  Message
                </label>
                <textarea placeholder="Enter your message"className="w-full h-34 border border-gray-300 rounded p-4 outline-none focus:border-blue-500 text-xs"></textarea>
                <button  className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded mt-6 font-normal">
                Send Message
               </button>
            </div>
        </div>

        <div className='flex justify-center gap-8 mt-8'>
            <div className='w-[450px] h-[370px] bg-white rounded-lg shadow-lg p-8'>
                 <h3 class=" text-xl font-semibold mb-6">
            Our Contact Details
        </h3>

        <p className="text-gray-700  mb-8 text-[14px]">
            Have any questions? Reach out to us directly,
            and we'll get <br/> back to you as soon as possible!
        </p>
        <h4 className="font-semibold">Address</h4>
        <p className="text-gray-700 mb-5 text-[14px] ">
            1234 Real Estate St, Dream City, DC 56789
        </p>
        <h4 className="font-semibold">Phone</h4>
        <p class="text-gray-700 mb-5 text-[14px]">
            +1 (234) 567-890
        </p>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
