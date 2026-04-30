import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-10"
    >
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-500 mt-2">
        Feel free to reach out for any queries.
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg h-32"
        ></textarea>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}