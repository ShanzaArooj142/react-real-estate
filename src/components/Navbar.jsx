import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav className='flex justify-between'>
        <img src="/logo.svg" alt="" className='bg-amber-100 ml-40 text-[12px]' />
        <ul className='flex justify-between  gap-12'>
            <li><a href="#" className='text-black hover:text-gray-500 text-[14px]'>Home</a></li>
            <li><a href="#" className='text-black hover:text-gray-500 text-[14px]'>About</a></li>
            <li><a href="#" className='text-black hover:text-gray-500 text-[14px]'>Project</a></li>
            <li><a href="#" className='text-black hover:text-gray-500 text-[14px]'>Testimonials</a></li>
        </ul>
        <button className='mr-40 bg-amber-100 text-gray-700 text-[14px] px-6 py-2 rounded-full font-semibold '>Sign Up</button>
     </nav>
    </div>
  )
}

export default Navbar
