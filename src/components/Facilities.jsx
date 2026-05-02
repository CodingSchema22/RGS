import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
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
    <>
    <section className="relative py-24 px-6 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 w-[900px] h-[900px] bg-red-300 opacity-20 blur-3xl rounded-full -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
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
        <div className="grid md:grid-cols-3 gap-10 [perspective:1200px]">

          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
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

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-500 text-white text-2xl shadow-md group-hover:scale-110 transition">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-red-600 transition">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
    </>
  );
}