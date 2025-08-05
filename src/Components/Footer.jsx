import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleQuickLinks = () => setQuickLinksOpen(!isQuickLinksOpen);
  const toggleAbout = () => setAboutOpen(!isAboutOpen);
  const toggleServices = () => setServicesOpen(!isServicesOpen);

  return (
    <footer className="w-full bg-black text-white px-6 py-10 font-serif">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-4 md:gap-10 gap-6 text-left">
        <div>
          <img src="/Images/weblogo3.png" alt="Logo" className="md:h-24 h-20 rounded-2xl mb-6" />
          <div className="flex mt-4 space-x-4">
            <a href="#"><FaFacebookF className="text-[#0866FF] hover:text-gold transition" /></a>
            <a href="#"><FaTwitter className="text-[#1C96E8] hover:text-gold transition" /></a>
            <a href="#"><FaInstagram className="text-[#F7322F] hover:text-gold transition" /></a>
            <a href="#"><FaLinkedinIn className="text-[#0077B5] hover:text-gold transition" /></a>
          </div>
        </div>

        <div className="text-sm md:block mt-4">
          <h2
            onClick={toggleQuickLinks}
            className="font-semibold text-[#FFC80E] mb-2 md:mb-4 cursor-pointer md:cursor-default select-none"
          >
            Quick Links
            <span className="inline-block ml-2 md:hidden">
              {isQuickLinksOpen ? "▲" : "▼"}
            </span>
          </h2>
          <div
            className={`md:block overflow-hidden transition-all duration-300 ease-in-out ${
              isQuickLinksOpen ? "max-h-96" : "max-h-0 md:max-h-full"
            }`}
          >
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
              <li><Link to="/sub" className="hover:text-gold transition">Submissions</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-sm md:block mt-5">
          <h2
            onClick={toggleAbout}
            className="font-semibold text-[#FFC80E] mb-2 md:mb-4 cursor-pointer md:cursor-default select-none"
          >
            About Us
            <span className="inline-block ml-2 md:hidden">
              {isAboutOpen ? "▲" : "▼"}
            </span>
          </h2>
          <div
            className={`md:block overflow-hidden transition-all duration-300 ease-in-out ${
              isAboutOpen ? "max-h-96" : "max-h-0 md:max-h-full"
            }`}
          >
            <ul className="space-y-2 text-white">
              <li>Email: info@example.com</li>
              <li>Location: 123 Main St, City</li>
              <li>Phone: +123 456 7890</li>
              <li>Working Hours: Mon - Fri, 9am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="text-sm md:block mt-5">
          <h2
            onClick={toggleServices}
            className="font-semibold text-[#FFC80E] mb-2 md:mb-4 cursor-pointer md:cursor-default select-none"
          >
            Submissions
            <span className="inline-block ml-2 md:hidden">
              {isServicesOpen ? "▲" : "▼"}
            </span>
          </h2>
          <div
            className={`md:block overflow-hidden transition-all duration-300 ease-in-out ${
              isServicesOpen ? "max-h-96" : "max-h-0 md:max-h-full"
            }`}
          >
            <ul className="space-y-2 text-white">
              <li><Link to="/sub" className="hover:text-gold transition">Submit a Letter</Link></li>
              <li><Link to="/letters" className="hover:text-gold transition">View Submissions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-left text-sm text-[#FFC80E] mt-8 border-t border-gold/30 pt-4 max-w-7xl mx-auto">
        &copy; {new Date().getFullYear()} Khat Khazana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
