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
    <div className="eyes w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full bg-cover bg-center position-center bg-[url('assets/images/eye1.jpg')]">
      <div className="z-99 text-5xl text-center pt-20 neue-montreal text-bold text-[#CDEA68]" >Feel Free To Contact Us</div>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50% flex items-center justify-center gap-10'>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
            <div style={{transform:`rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 px-1 ">
            <div className="w-10 h-10 rounded-full bg-zinc-100">
              
              </div>
            </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center  ">
          <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">
          <div style={{transform:` rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10  px-1">
            <div className="w-10 h-10 rounded-full bg-zinc-100">
              
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
