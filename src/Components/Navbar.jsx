import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaHeadset } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [forceToggled, setForceToggled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const navLinks = [
    "NEW IN", "WOMAN", "MAN", "MINI ME",
    "FRAGRANCES", "ACCESSORIES", "SPECIAL OFFERS", "THE EDIT"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (window.innerWidth >= 1024) {
        if (currentY > 100 && currentY > lastScrollY) {
          if (!forceToggled) setShowBottomNav(false);
        } else {
          setShowBottomNav(true);
          setForceToggled(false);
        }

        setIsTop(currentY === 0);
        setLastScrollY(currentY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, forceToggled]);

  return (
  <div
  className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
    isTop ? "bg-white/10 backdrop-blur-xm" : "bg-white shadow-md"
  }`}
>

      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-3">
          {!showBottomNav || forceToggled ? (
  <button
  onClick={() => {
    setShowBottomNav(!showBottomNav);
    setForceToggled(!forceToggled);
  }}
  className={`lg:flex hidden p-1 rounded ${
    isTop ? "bg-white text-black" : "bg-white text-black"
  }`}
>
  {showBottomNav ? <FiX size={20} /> : <FiMenu size={20} />}
</button>

          ) : null}

    <img
  src="/Images/weblogo3.png"
  alt="SAPPHIRE Logo"
  className="h-10 w-auto object-contain"
/>

        </div>

        {/* Search bar with icon inside */}
        <div className="hidden lg:flex flex-grow mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="FIND YOUR FAVOURITES"
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Right icons */}
        <div className={`hidden lg:flex items-center gap-4 ${isTop ? "text-black" : "text-black"}`}>
          <FaHeadset className="text-lg" />
          <FaUser className="text-lg" />
          <div className="relative">
            <FaShoppingBag className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (animated) */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.div
            key="bottomNav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden lg:flex justify-center border-t border-gray-200 text-sm overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className={`px-4 py-2 ${
                  link === "SPECIAL OFFERS"
                    ? "text-[#b10022] font-semibold"
                    : `${isTop ? "text-black" : "text-gray-800"} hover:text-black`
                }`}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
