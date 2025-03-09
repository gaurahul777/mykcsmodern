import React from 'react'

const Products = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-20'>
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
  )
}

export default Products