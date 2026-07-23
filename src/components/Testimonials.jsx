import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechNova",
    review:
      "TCONGS delivered our website on time with excellent quality. Their team was professional and responsive throughout the project.",
  },
  {
    name: "Priya Patel",
    company: "Creative Studio",
    review:
      "Their attention to detail and modern UI design exceeded our expectations. Highly recommended for digital solutions.",
  },
  {
    name: "Amit Verma",
    company: "NextGen Solutions",
    review:
      "From planning to deployment, the process was smooth. We are extremely satisfied with the final product.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0b1120] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-indigo-400 uppercase font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We build lasting relationships by delivering high-quality
            digital solutions with outstanding customer support.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>

              <p className="text-gray-400 leading-7 italic">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>

                <span className="text-gray-500 text-sm">
                  {item.company}
                </span>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;