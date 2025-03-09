import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer data-scroll data-scroll-section data-scroll-speed="-0.02" className="bg-zinc-900 py-10 md:px-20  h-auto w-full rounded-t-md ">
      <div className="md:container mx-auto text-center h-auto  ">
        {/* <div className="my-4 border-t border-[#FF8357] mb-7 md:mb-0"></div> */}

        <div className="all-links flex md:flex-row md:flex-nowrap flex-col flex-wrap md:justify-between md:items-start md:mt-9 md:mb-9 justify-center items-center gap-8 md:gap-0">
          {/* Top Products Section */}
          <div className="flex flex-col md:gap-3 gap-1">
            <h2 className="text-2xl font-bold tracking-wider md:tracking-normal">Top Products</h2>
            <Link to="/product_details" className="text-white text-xl hover:text-black">Tms Erp</Link>
            <Link to="/driverdost_details" className="text-white text-xl hover:text-black">Driver Dost</Link>
            <Link to="/" className="text-white text-xl hover:text-black">Upcoming</Link>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col md:gap-3 gap-1">
            <h2 className="text-2xl font-bold tracking-wider md:-tracking-normal">Quick Links</h2>
            <Link to="/about" className="text-white text-xl hover:text-black">About</Link>
            <Link to="/services" className="text-white text-xl hover:text-black">Services</Link>
            <Link to="/contact" className="text-white text-xl hover:text-black">Contact</Link>
            <Link to="/contact" className="text-white text-xl hover:text-black">Terms & Conditions</Link>
          </div>

          {/* Services Section */}
          <div className="flex flex-col md:gap-3 gap-1">
            <h2 className="text-2xl font-bold tracking-wider md:tracking-normal">Services</h2>
            <Link to="/services" className="text-white text-xl hover:text-black">Web Development</Link>
            <Link to="/services" className="text-white text-xl hover:text-black">Mobile Application</Link>
            <Link to="/services" className="text-white text-xl hover:text-black">CRM</Link>
            <Link to="/services" className="text-white text-xl hover:text-black">ERP</Link>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col md:gap-3 gap-1">
            <h2 className="text-2xl font-bold tracking-wider md:tracking-normal">Resources</h2>
            <Link to="/contact" className="text-white text-xl hover:text-black">Career</Link>
            <Link to="/contact" className="text-white text-xl hover:text-black">Clients</Link>
            <Link to="/contact" className="text-white text-xl hover:text-black">Policy</Link>
          </div>
        </div>

        <div className="my-4 border-t border-[#d98e79]"></div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Brand Section */}
          <Link to="/" className="flex md:items-center md:justify-center md:mb-4">
            <div  className="w-28 h-14 bg-cover bg-center bg-[url('/assets/images/kss3.png')]" ></div>
          </Link>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <RiFacebookFill size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <RiInstagramLine size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <RiTwitterLine size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <RiLinkedinFill size={24} />
            </a>
          </div>

          {/* Copyright Section */}
          <p className="text-md text-gray-400 mt-5 mb-2 md:mb-0 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} All rights reserved<span>&#x2764;</span> by 
            <Link to="/" className="text-[#d98e79] hover:text-red-600"> KSS PL</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
