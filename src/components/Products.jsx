import React from 'react'

const Products = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='rounded-b-xl w-full h-screen bg-zinc-900  px-20 flex flex-col'>
    <div className="w-full pb-18">
        <h1 className="text-5xl neue-montreal tracking-tight">Our Products</h1>
        
      </div>
    <div className='flex items-center gap-5'>
      <div className='cardcontainer w-1/2 h-[50vh]'>
<div className='card w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center relative'>
<div className='absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3'>&copy; 2017</div>
  <div className='rounded-full h-[35vh] w-[35vh] bg-[url("assets/images/tms1.png")] bg-center'></div>
</div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
<div className='card w-full h-full rounded-xl flex justify-center items-center bg-[#192826] relative'>
<div className='absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3'>&copy; 2017</div>
<div className='text-2xl font-bold tracking-wide text-[#CDEA68]'> Driver Dost</div>
</div>
<div className='card w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center  relative'>
<div className='absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3'>&copy; 2017</div>
<div className='text-2xl font-bold tracking-wide text-zinc-100'> Upcoming ...</div>
</div>
        </div>
</div>
    </div>
  )
}

export default Products