import { motion } from "framer-motion";

const classes = [
  "Nursery",
  "KG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Matric (10th)",
];

export default function Classes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto p-10"
    >
      <h1 className="text-3xl font-bold">Our Classes</h1>
      <p className="text-gray-500 mt-2">
        From early education to matriculation.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {classes.map((cls, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow rounded-xl text-center font-semibold hover:bg-red-50 transition"
          >
            {cls}
          </div>
        ))}
      </div>
    </motion.div>
  );
}