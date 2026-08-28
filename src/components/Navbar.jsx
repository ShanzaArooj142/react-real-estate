import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-4'>
     <nav className='flex justify-between'>
        <img src="/logo.svg" alt="" className=' ml-40 text-[10px]' />
        <ul className='flex justify-between  gap-10'>
            <li><a href="#" className='text-white hover:text-gray-500 text-[14px]'>Home</a></li>
            <li><a href="#" className='text-white hover:text-gray-500 text-[14px]'>About</a></li>
            <li><a href="#" className='text-white hover:text-gray-500 text-[14px]'>Project</a></li>
            <li><a href="#" className='text-white hover:text-gray-500 text-[14px]'>Testimonials</a></li>
        </ul>
        <button className='mr-40 bg-white text-gray-700 text-[14px] px-6 py-2 rounded-full font-semibold '>Sign Up</button>
     </nav>
    </div>
  )
}

export default Navbar
