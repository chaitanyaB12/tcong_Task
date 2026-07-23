import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We understand your business goals and project requirements.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Creating modern UI/UX designs that users love.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Building scalable and high-performance applications.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploying and supporting your product for success.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-indigo-400 font-semibold uppercase">
            Our Process
          </p>

          <h2 className="text-4xl font-bold mt-3">
            How We Work
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our simple and efficient workflow helps us deliver
            successful digital products from idea to launch.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {process.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center hover:border-indigo-500 transition duration-300"
              >

                {/* Number */}

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mt-4 mb-6">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {step.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Process;