import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-6 bg-red-600 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admissions Open for 2026
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-white/90 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join Rakan Grammar School and give your child the best foundation for a successful future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition">
            Apply Now
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-red-600 transition">
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}