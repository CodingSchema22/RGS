import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}

        <motion.img
          src="/images/school.jpg" // 👉 replace with your image
          alt="RGS School"
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to <span className="text-red-600">Rakan Grammar School</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Rakan Grammar School is committed to providing quality education
            from Nursery to 10th class. Our mission is to build strong academic
            foundations while nurturing creativity, discipline, and confidence
            in every student.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With modern facilities, experienced teachers, and a focus on
            character building, we prepare students for a successful future.
          </p>

          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
}