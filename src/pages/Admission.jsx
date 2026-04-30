import { motion } from "framer-motion";

export default function Admission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto p-10"
    >
      <h1 className="text-3xl font-bold">Admission Open</h1>
      <p className="text-gray-500 mt-2">
        Apply now to secure your seat in our school.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-bold text-xl">Requirements</h2>
          <ul className="list-disc ml-5 mt-3 text-gray-600">
            <li>Birth Certificate</li>
            <li>Previous School Result</li>
            <li>Passport Size Photos</li>
          </ul>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="font-bold text-xl">Process</h2>
          <ul className="list-disc ml-5 mt-3 text-gray-600">
            <li>Fill Application Form</li>
            <li>Submit Documents</li>
            <li>Entry Test / Interview</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}