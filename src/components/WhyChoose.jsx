import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Users,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We deliver projects on time without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    description:
      "Reliable and secure software built using modern standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced developers focused on creating business value.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support to ensure smooth project execution.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#0b1120] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-indigo-400 font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Why Businesses Choose TCONGS
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We combine creativity, technology, and innovation to
            build digital solutions that help businesses succeed.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111827] rounded-2xl border border-gray-800 p-8 text-center hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {item.description}
                </p>
              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;