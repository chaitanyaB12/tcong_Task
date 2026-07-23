import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#services" className="hover:text-indigo-400 transition">
            Services
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="#process" className="hover:text-indigo-400 transition">
            Process
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg transition">
          Get Started
        </button>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1120] border-t border-gray-800 px-6 py-5 flex flex-col gap-5">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>

          <button className="bg-indigo-600 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;