import { motion } from "framer-motion";
import NewsScroller from "./Newsscroller";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-12">

        {/* Text - Mobile SECOND, Desktop FIRST */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="text-red-600 font-semibold tracking-wide">
            Welcome to Rakan Grammar School
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Future Leaders Through
            <span className="text-red-600"> Quality Education</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            From Nursery to Matric, we focus on academic excellence, discipline,
            and modern learning to prepare students for a successful future.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
              Explore Campus
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">
              Admission Open
            </button>
          </div>
        </motion.div>

        {/* Image - Mobile FIRST, Desktop SECOND */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-1 md:order-2"
        >
          <div className="overflow-hidden shadow-xl rounded-xl">
            <img
              src="./images/banner.jpg"
              alt="School Campus"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

      </div>

      <NewsScroller />
    </section>
  );
}