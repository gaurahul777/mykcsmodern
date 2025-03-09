import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed z-[9999] w-full px-20 pt-4 flex justify-between items-center neue-montreal  
      bg-white/1 backdrop-blur-md shadow-lg">
      <div className="logo text-[3vw] tracking-tighter founders-grotesk w-auto">
        kss<span className="text-[#d99175]">pl</span>
      </div>
      <div className="links flex gap-10">
        {[
          { name: "Services", id: "services" },
          { name: "Our Work", id: "our-work" },
          { name: "About Us", id: "about" },
          { name: "Insights", id: "insights" },
          { name: "Contact us", id: "contact" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className={`text-nowrap text-lg capitalize font-light hover:text-[#d99175] transition ${
              index === 4 && "ml-32"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
