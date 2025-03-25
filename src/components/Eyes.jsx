import React, { useEffect, useState } from "react";

const Eyes = () => {
const [rotate,setRotate]= useState(0);
useEffect(() => {
  window.addEventListener('mousemove', (e) => {
    let mouseX=e.clientX;
    let mouseY=e.clientY;

    let deltaX=mouseX-window.innerWidth/2;
    let deltaY=mouseY-window.innerHeight/2;

    let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
    setRotate(angle-180);//to invert
  })
}, [rotate])


  return (
    <div className=" eyes w-full h-[40vh] md:h-screen  pt-12 md:pt-0">
      <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full md:bg-cover bg-center position-center bg-[url('assets/images/eye1.jpg')] ">
      <div className=" -mt-3 md:-mt-0 z-99  text-3xl md:text-5xl text-center md:pt-20 pt-8 neue-montreal text-bold text-[#CDEA68]" >Feel Free To Contact Us</div>
        <div className=' absolute md:top-1/2 top-[29%] left-1/2 -translate-x-[50%] -translate-y-[50% flex items-center justify-center gap-10'>
          <div className=" w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
            <div style={{transform:`rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 px-1 ">
            <div className="w-3 h-3 md:w-10 md:h-10 rounded-full bg-zinc-100">
              
              </div>
            </div>
            </div>
          </div>
          <div className="w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center  ">
          <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">
          <div style={{transform:` rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10  px-1">
            <div className="w-3 h-3 md:w-10 md:h-10 rounded-full bg-zinc-100">
              
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
