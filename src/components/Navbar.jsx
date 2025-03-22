import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="border-2 fixed z-[9999] w-full md:px-20 md:pt-4 flex justify-between items-center neue-montreal  
      bg-white/1 backdrop-blur-md shadow-lg overflow-hidden"
    >
      <div className="logo text-[7vw] md:text-[3vw] tracking-tighter founders-grotesk w-auto">
        kss<span className="text-[#d99175]">pl</span>
      </div>
      <div className="hidden md:block ">
        <div className="links flex gap-10">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Our Product", id: "our-product" },
            { name: "Contact us", id: "contact" },
          ].map((item, index) => (
            <button key={index} onClick={() => scrollToSection(item.id)} className={`text-nowrap text-lg capitalize font-light hover:text-[#d99175] transition ${index === 4 && "ml-32"}`}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="block md:hidden">menu</div>
    </div>
  );
};

export default Navbar;
