import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (

  <div 
    style={{ backgroundImage: "url('/bg.png')" }} 
    className="h-screen w-full bg-cover bg-center bg-no-repeat">
    <Navbar/>
    <h1 className=" relative  flex flex-col items-center justify-center h-[72vh] text-center text-white text-5xl font-bold leading-tight pt-45">
    Explore homes that <br />
    fits your dreams</h1>
    
    <div className='flex gap-6 ml-125'>
      <button className='border-2 border-white text-white h-11 px-6 py-2 rounded-full hover:bg-white hover:text-black duration-300'> Projects</button>
     <button className='bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 h-11  rounded-full text-md'> Contact Us</button>
    </div> 
 </div>
  )
}

export default Hero
