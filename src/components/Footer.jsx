import logo from "../assets/logo.svg";
import { Mail } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <img src={logo} alt="TCONGS Logo" className="h-12 mb-4" />

        {/* Tagline */}
        <p className="text-gray-400 max-w-md">
          Building Digital Solutions for Modern Businesses.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:info@tcongsinfotech.com"
            className="text-gray-400 hover:text-indigo-500 transition"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800 my-6"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 TCONGS INFOTECH. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;