import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Parent",
      rating: 5,
      message:
        "Rakan Grammar School provides excellent education and discipline. My child has improved a lot academically.",
    },
    {
      name: "Ali Raza",
      role: "Student",
      rating: 4,
      message:
        "Teachers are very supportive and the environment is great for learning and growth.",
    },
    {
      name: "Mrs. Fatima",
      role: "Parent",
      rating: 5,
      message:
        "Best school in the area with modern facilities and caring staff. Highly recommended!",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          What <span className="text-red-600">People Say</span>
        </h2>
        <p className="mt-3 text-gray-500">
          Feedback from parents and students
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

            {/* Stars */}
            <div className="text-yellow-400 text-sm">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            {/* Message */}
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              “{item.message}”
            </p>

            {/* Name */}
            <h4 className="mt-5 font-bold text-gray-800">
              {item.name}
            </h4>

            {/* Role */}
            <p className="text-xs text-gray-500">{item.role}</p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}