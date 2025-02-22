import React from 'react'
import { GiLightBulb } from "react-icons/gi";
import { BiPaperPlane } from "react-icons/bi";
import { FaHandPeace } from "react-icons/fa";


const AboutShowCases = () => {
  return (
    <section className='w-screen'>

<div className='w-full py-8 px-4  md:px-5 bg-[#CDEA68]'>

<div className='flex md:flex-row flex-col justify-around items-center space-y-8 gap-5 md:space-y-0'>

<div className=' flex md:flex-col items-center justify-center '>
<div className='img-part border-2 border-orange-200 p-4 rounded-[100%] bg-gradient-to-br from-yellow-300 to-yellow-300 shadow-xl'>
<GiLightBulb className='bg-yellow-300 font-bold text-4xl transform hover:scale-125 transition-transform duration-700'/>
</div>
<div className='text-part flex flex-col justify-center  items-end md:items-center mt-3'>
    <h2 className='md:text-xl text-2xl font-medium'>Creative Design
    </h2>
    <p className='text-md mt-4 text-[#646472] md:text-center text-end'>UI/UX Design, Design Review, Development & Fully Automation</p>
</div>
</div>

<div className=' flex  flex-row-reverse md:flex-col items-center justify-center'>
<div className='img-part border-2 border-red-300 p-4 rounded-[100%] bg-gradient-to-br from-orange-300 to-red-300 shadow-xl'>
<FaHandPeace className='bg-red-300 font-bold text-4xl transform hover:rotate-12 transition-transform duration-1000'/>
</div>
<div className='text-part flex flex-col justify-center md:items-center mt-3'>
    <h2 className='text-2xl md:text-xl font-medium'>We make Best Result

    </h2>
    <p className='text-md mt-4 pr-4 md:pr-0 text-[#646472] md:text-center'>Bug tracking and test management tools For Make Best Result

</p>
</div>
</div>

<div className=' flex md:flex-col items-center justify-center'>
<div className='img-part border-2 border-orange-200 p-4 rounded-[100%] bg-gradient-to-br from-yellow-300 to-yellow-300 shadow-xl'>
<BiPaperPlane className='bg-yellow-300 font-bold text-4xl transform hover:rotate-180 transition-transform duration-1000'/>
</div>
<div className='text-part flex flex-col justify-center md:items-center items-end mt-3'>
    <h2 className='text-2xl md:text-xl font-medium'>best platform

    </h2>
    <p className='text-md mt-4 text-[#646472] md:text-center text-end'>we provide customize web solutions to meet your business requirements effectively</p>
</div>
</div>

 </div>

 </div>

    </section>
  )
}

export default AboutShowCases