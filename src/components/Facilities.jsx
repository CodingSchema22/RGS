import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBook,
  FaFlask,
  FaFutbol,
  FaRobot,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: FaLaptopCode,
      title: "Computer Lab",
      desc: "Equipped with modern systems to build strong digital and coding skills.",
    },
    {
      icon: FaBook,
      title: "Library",
      desc: "A quiet learning space with books for academic and personal growth.",
    },
    {
      icon: FaFlask,
      title: "Science Labs",
      desc: "Well-equipped labs for practical learning in all science subjects.",
    },
    {
      icon: FaFutbol,
      title: "Sports Ground",
      desc: "Large playground supporting sports, fitness, and teamwork activities.",
    },
    {
      icon: FaRobot,
      title: "Robotics Lab",
      desc: "Hands-on STEM learning with robotics, coding, and innovation projects.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Facilities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a strong academic and practical environment to help students
            grow in knowledge, skills, and confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="text-red-600 text-3xl">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}