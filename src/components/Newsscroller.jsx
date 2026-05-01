import { motion } from "framer-motion";

export default function NewsScroller() {
  const news = [
    "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅",
     "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅", "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅", "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅", "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅", "Admissions Open for 2026 Session 🎓",
    "Annual Sports Day Coming Soon 🏆",
    "New Computer Lab Launched 💻",
    "Parent-Teacher Meeting on Friday 📅",
  ];

  return (
    <div className="w-full bg-red-600 text-white overflow-hidden p-6">
<motion.div
  className="flex gap-16 whitespace-nowrap text-sm font-semibold w-full"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    duration: 5,
    ease: "linear",
  }}
>
  {[...news, ...news].map((item, index) => (
    <span key={index}>{item}</span>
  ))}
</motion.div>
    </div>
  );
}