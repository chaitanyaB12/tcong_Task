import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Cloud, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive and scalable websites using modern technologies.",
  },
  {
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions tailored to business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android and iOS applications with seamless user experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure cloud deployment and infrastructure management.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Beautiful and user-friendly interfaces for digital products.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Grow your online presence through effective marketing.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#0b1120] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-white">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide complete digital solutions that help businesses
            build, grow, and succeed in today's competitive market.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">

                  <Icon size={28} />

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;