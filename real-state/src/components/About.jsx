import React from 'react'

const About = () => {
  return (
    <div className='py-20 px-24 bg-white'>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            About <u>Our Brand</u>
          </h2>

         <p className="text-gray-800 text-sm mt-6 leading-6">
            Passionate About Properties, Dedicated to <br/>
            your vision
         </p>
       </div>


       <div className='max-w-6xl mx-auto flex items-center justify-between gap-10'>
        <div className='w-1/2 flex justify-center'>
          <img src="/img2.png" alt="" className='w-[280px] h-[300px] object-cover rounded-t- [130px] rounded-b-3xl shadow-md ml-[25px]' />

        </div>

        <div className='w-1/2'>

           <div className='grid grid-cols-2 gap-y-4 gap-x-3 mb-10'>
               <div>
                    <h3 className="text-3xl font-semibold ml-8">10+</h3>
                    <p className="text-gray-600  mt-2">
                        Years of Experience
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl font-semibold ml-8">12+</h3>
                    <p className="text-gray-600  mt-2">
                        Projects Completed
                    </p>
                </div>

                  <div>
                    <h3 className="text-3xl font-semibold ml-8">20+</h3>
                    <p className="text-gray-600  mt-2">
                        Mn.sq.ft. Delivered
                    </p>
                </div>

                 <div>
                    <h3 className="text-3xl font-semibold ml-8">25+</h3>
                    <p className="text-gray-600  mt-2">
                        Ongoing Projects
                    </p>
                </div>
            </div>

            <p className="text-gray-600 text-sm">
                We specialize in providing high-quality properties that 
                meet the diverse <br /> needs of our clients. Our brand is built on 
                trust, professionalism, and a <br /> passion for creating spaces
                that resonate with your vision. Whether you're <br /> buying, 
                selling, or renting, we are dedicated to ensuring a seamless 
                and <br /> rewarding experience for all our clients.
            </p>

        </div>

       </div>

    </div>
  )
}

export default About
