import { ArrowRight } from "lucide-react";

function CTA() {
  return (
  <section className="bg-[#050816] py-24 px-6">
  <div className="max-w-5xl mx-auto rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600 py-20 px-8 text-center shadow-2xl">

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Ready to Build Your Next Project?
    </h2>

    <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
      Let's work together to create innovative digital solutions
      that help your business grow.
    </p>

    <button className="mt-10 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2 mx-auto">
      Contact Us
      <ArrowRight size={18}/>
    </button>

  </div>
</section>
  );
}

export default CTA;