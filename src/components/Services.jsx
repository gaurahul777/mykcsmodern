import React from "react";

export const Services = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-18">
        <h1 className="text-5xl neue-montreal tracking-tight">Our Services</h1>
        
      </div>
      <div className="px-20">
      <div className="cards w-full flex gap-10 mt-10">
     
          <div className="relative cardcontainer rounded-lg w-1/2 h-[75vh] ">
          <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">{"WEB DEVELOPMENT".split('').map((item,index)=><span key={index}>{item}</span>)}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
<img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" className="w-full h-full bg-cover"/>
            </div>
          </div>
          <div className="relative cardcontainer rounded-lg w-1/2 h-[75vh] ">
          <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl text-[#CDEA68] founders-grotesk leading-none tracking-tighter text-nowrap">{"APP DEVELOPMENT".split('').map((item,index)=><span key={index}>{item}</span>)}</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
<img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" className="w-full h-full bg-cover"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
