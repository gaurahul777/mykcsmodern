import React from "react";

const Products = () => {
  return (
    <div id="our-product" data-scroll data-scroll-section data-scroll-speed="-.2" className="rounded-b-xl w-full md:h-screen h-[60vh] bg-zinc-900  md:px-20 px-2 flex flex-col">
      <div className="w-full md:pb-18 pb-5">
        <h1 className="text-3xl md:text-5xl neue-montreal tracking-tight">Our Products</h1>
      </div>
      <div className=" flex items-center gap-5 overflow-x-scroll w-full">
        <div className="cardcontainer md:w-1/2 w-[300px] h-[30vh] md:h-[50vh]">
          <div className=" card w-[300px] md:w-full  h-full rounded-xl bg-[#004d43] flex items-center justify-center relative">
            <div className="absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3">&copy; 2017</div>
            <div className='rounded-full md:h-[35vh] md:w-[35vh] bg-[url("assets/images/tms1.png")] md:bg-center bg-cover h-[15vh] w-[15vh]'></div>
          </div>
        </div>
        <div className=" cardcontainer flex gap-5 w-[700px] md:w-1/2 md:h-[50vh] h-[30vh]">
          <div className="card  md:w-full w-[350px] h-full rounded-xl flex justify-center items-center bg-[#192826] relative">
            <div className="absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3">&copy; 2017</div>
            <div className="text-2xl font-bold tracking-wide text-[#CDEA68]"> Driver Dost</div>
          </div>
          <div className="card md:w-full w-[350px] h-full rounded-xl bg-[#004d43] flex items-center justify-center  relative">
            <div className="absolute bottom-2 border-[1px] border-[#CDEA68] left-2 text-[#CDEA68] rounded-3xl px-3">&copy; 2017</div>
            <div className="text-2xl font-bold tracking-wide text-zinc-100"> Upcoming ...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
