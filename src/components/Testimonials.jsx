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
  <section className="relative py-20 px-6 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-red-300 opacity-20 blur-3xl rounded-full -translate-x-1/2"></div>
      
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 110,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                }}
                className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-2xl transition-all overflow-hidden"
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