import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImage from "../assets/about.jpg";

const features = [
  "Experienced Development Team",
  "Modern Technologies",
  "Client-Centric Approach",
  "Reliable Support",
];

function About() {
  return (
    <section id="about" className="bg-[#050816] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-semibold uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-white mt-4">
            Delivering Smart IT Solutions for Growing Businesses
          </h2>

        <p className="text-gray-400 mt-6 leading-8">
           At TCONGS INFOTECH, we specialize in building innovative digital
           solutions that help businesses grow. From custom web development
           and mobile applications to cloud services and UI/UX design, our
           experienced team focuses on delivering reliable, scalable, and
           user-friendly solutions tailored to every client's needs.
        </p>

          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-indigo-500" size={22} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;