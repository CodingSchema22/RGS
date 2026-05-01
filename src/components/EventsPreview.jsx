import { motion } from "framer-motion";

export default function EventsPreview() {
  const events = [
    {
      type: "Event",
      title: "Annual Sports Day",
      date: "15 March 2026",
      desc: "Students will participate in cricket, football, and athletics competitions.",
    },
    {
      type: "Announcement",
      title: "Admissions Open 2026",
      date: "Now Open",
      desc: "Enroll your child in Nursery to 10th class for the new academic session.",
    },
    {
      type: "Event",
      title: "Science Exhibition",
      date: "22 April 2026",
      desc: "Students will showcase innovative science projects and experiments.",
    },
    {
      type: "Announcement",
      title: "Parent-Teacher Meeting",
      date: "5 May 2026",
      desc: "Meeting scheduled to discuss student progress and performance.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Events & <span className="text-red-600">Announcements</span>
        </h2>
        <p className="mt-3 text-gray-500">
          Stay updated with school activities and important notices
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {events.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

            {/* Badge */}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                item.type === "Event"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {item.type}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {item.title}
            </h3>

            {/* Date */}
            <p className="text-sm text-gray-500 mt-1">{item.date}</p>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Button */}
            <button className="mt-5 text-sm font-semibold text-red-600 hover:underline">
              Read More →
            </button>

          </motion.div>
        ))}

      </div>
    </section>
  );
}