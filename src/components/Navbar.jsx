import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[9999] w-full px-20 pt-4 flex justify-between items-center neue-montreal ">
      <div className="logo text-[3vw] tracking-tighter founders-grotesk  w-auto">kss<span className="text-[#d99175]">pl</span></div>
      {/* <div className="w-[9vw] h-[5vw]  bg-cover bg-center bg-[url('public/assets/images/kss3.png')] mr-2"></div> */}
      {/* <div className="logo text-4xl font-bold"><span className="text-[#e08d6c] px-1">K</span>s<span className="text-[#e08d6c]">s</span></div> */}
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact us"].map((item, index) => (
          <a key={index} className={`text-nowrap text-lg capitalize font-light ${index == 4 && "ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
