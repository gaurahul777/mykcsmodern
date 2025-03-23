import React from 'react'
// import AboutShowCases from './AboutShowCase'

const About = () => {
  return (
    <div id='about' data-scroll data-scroll-section data-scroll-speed="-.1" className=' w-full md:py-15 bg-[#CDEA68] rounded-t-xl md:rounded-t-3xl text-black'>
        <h1 className='neue-montreal text-[5vw] md:text-[3.9vw] md:px-20 px-2 md:py-12 py-6 leading-[5vw] tracking-tight'>One-stop Destination for all internet solutions</h1>
{/* <AboutShowCases/> */}
<div className='w-full flex flex-col md:flex-row md:gap-5  border-t-[1px] md:mt-5 md:pt-8 pt-5 border-[#a1b562] md:px-20 px-2'>
  <div className=' w-full md:w-1/2 flex flex-col justify-center'>
    <h1 className='text-4xl founders-grotesk '>About Us :</h1>
    <h3 className="text-xl founders-grotesk text-gray-900 md:tracking-tight -leading-[1vw] mt-5 md:mt-10">Renowned top-notch quality services across the globe KCS has a team of highly skilled, experienced professionals with robust background and skill set to meet different types of project requirement. We have built a remarkable knowledge base that allows us to recognize the requirement better and deliver the right solution.</h3>
  </div>
  <div className='w-full md:w-1/2 h-[35vh] md:h-[70vh] rounded-3xl bg-[url("assets/images/about.png")] bg-cover '></div>
</div>
    </div>
  )
}

export default About