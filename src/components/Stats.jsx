import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return <span>{count}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
        // 👆 true when in view, false when out
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const stats = [
    { value: 5000, label: "Students" },
    { value: 200, label: "Teachers" },
    { value: 10, label: "Campuses" },
    { value: 95, label: "Success Rate (%)" },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-red-600 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-5xl font-bold">
              <Counter target={item.value} trigger={isVisible} />+
            </h2>

            <p className="mt-3 text-sm opacity-90 tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}