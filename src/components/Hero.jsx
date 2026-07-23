import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroGif from "../assets/hero.gif";
import bubble from "../assets/home-bubble.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] min-h-screen flex items-center pt-24">

      {/* Decorative Bubble */}
      <img
        src={bubble}
        alt=""
        className="absolute top-10 left-0 w-80 opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-indigo-400 font-semibold">
            Welcome to TCONGS INFOTECH
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-5 leading-tight">
            Build Digital
            <br />
            Solutions That
            <br />
            Drive Growth
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
            We help startups and businesses create modern websites,
            mobile applications, and digital solutions that deliver
            exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-indigo-600 hover:bg-indigo-700 px-7 py-3 rounded-xl flex items-center gap-2 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="border border-gray-600 hover:border-indigo-500 px-7 py-3 rounded-xl transition">
              Our Services
            </button>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={heroGif}
            alt="Developer"
            className="w-full max-w-md rounded-3xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;