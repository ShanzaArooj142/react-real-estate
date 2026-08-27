import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#111827] text-white px-24 py-14 mt-20'>
      <div className='flex justify-between'>
        <div className='w-75'>
          <h2 className="text-xl font-semibold mb-5">
            Real Estate
          </h2>
          <p className="text-gray-400 leading-7 text-[12px]">
            We craft spaces that fit your dreams.Whether
            you're buying, selling, or investing, we are here to
            guide you every step of the way.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">
            Useful Links
          </h2>
          <ul className="text-gray-400 leading-10 text-[12px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

          <div className="w-70">
            <h2 className="text-xl font-semibold mb-5">
                Contact Us
            </h2>
            <p className="text-gray-400 mb-3 text-xs">
                1234 Real Estate St, Dream City, DC 56789
            </p>
            <p className="text-gray-400 mb-3 text-[12px]">
                Phone: +1 (234) 567-890
            </p>
            <p className="text-gray-400 text-[12px]">
                Email: contact@realestate.com
            </p>
        </div>
      </div>

      <hr className="border-gray-700 mt-10" />
      <p className="text-center text-[13px] text-gray-500 mt-6">
      © 2025 Real Estate. All Rights Reserved.
     </p>
    
    </div>
  )
}

export default Footer
