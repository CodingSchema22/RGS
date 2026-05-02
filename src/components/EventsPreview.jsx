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
  <section className="relative py-20 px-6 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-red-300 opacity-20 blur-3xl rounded-full -translate-x-1/2"></div>
      
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
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-15">

        {events.map((item, index) => (
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