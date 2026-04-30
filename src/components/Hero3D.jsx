import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <section
  className="relative flex items-center justify-center overflow-hidden
             bg-gradient-to-br from-red-950 via-red-700 to-red-900
             px-4 sm:px-6 lg:px-10
             min-h-[70vh] sm:min-h-screen"
>

      {/* Background (lighter on mobile) */}
      <div className="absolute w-[220px] sm:w-[500px] h-[220px] sm:h-[500px]
                      bg-white/10 rounded-full blur-2xl sm:blur-3xl
                      top-[-100px] left-[-100px]" />
      <div className="absolute w-[200px] sm:w-[450px] h-[200px] sm:h-[450px]
                      bg-black/20 rounded-full blur-2xl sm:blur-3xl
                      bottom-[-100px] right-[-100px]" />

      {/* Main Content (NO heavy card feel on mobile) */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl text-center
                   sm:bg-white/10 sm:backdrop-blur-xl
                   sm:border sm:border-white/20
                   sm:rounded-3xl
                   sm:shadow-xl
                   px-2 sm:px-10 md:px-14
                   py-10 sm:py-14"
      >

        {/* Tag */}
        <motion.span
          variants={fadeUp}
          className="inline-block px-3 sm:px-4 py-1 text-[10px] sm:text-xs
                     tracking-widest uppercase
                     bg-white/10 text-white rounded-full border border-white/20"
        >
          Nursery • Primary • Secondary Education
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="mt-5 sm:mt-6 text-2xl sm:text-5xl md:text-6xl
                     font-extrabold text-white leading-tight"
        >
          Rakan Grammar School
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-4 sm:mt-5 text-xs sm:text-lg md:text-xl
                     text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Empowering students through discipline, innovation, and excellence —
          shaping tomorrow’s leaders today.
        </motion.p>

        {/* Stats → STACK ON MOBILE */}
        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:flex sm:justify-center sm:gap-10 text-white/90"
        >
          {[
            { num: "3+", label: "Campuses" },
            { num: "1000+", label: "Students" },
            { num: "10+", label: "Years" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-3xl font-bold">{item.num}</p>
              <p className="text-[10px] sm:text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Buttons → FULL WIDTH MOBILE */}
        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center"
        >
          <button className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full
                             bg-white text-red-700 font-semibold
                             transition hover:scale-[1.03] active:scale-95">
            Explore Campuses
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full
                             border border-white/40 text-white
                             hover:bg-white hover:text-red-700 transition">
            Admissions Open
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}