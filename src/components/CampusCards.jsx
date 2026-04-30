// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import campuses from "../data/campuses";

// export default function CampusCards() {
//   return (
//     <div className="grid md:grid-cols-3 gap-8 p-10">
//       {campuses.map((campus, index) => (
//         <Link key={campus.id} to={`/campus/${campus.id}`}>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
//           >
//             <h2 className="text-xl font-bold">{campus.name}</h2>
//             <p className="text-gray-500">{campus.location}</p>

//             <p className="mt-3 text-sm text-gray-600">
//               Students: {campus.students}+
//             </p>
//           </motion.div>
//         </Link>
//       ))}
//     </div>
//   );
// }


















































// import { motion } from "framer-motion";
// import campuses from "../data/campuses";
// import { Link } from "react-router-dom";

// export default function CampusCards() {
//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-red-300 opacity-20 blur-3xl rounded-full -translate-x-1/2"></div>

//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-gray-800">
//           Our Campuses
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Explore our connected learning environments across all branches
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 relative z-10">
        
//        {campuses.map((campus, index) => (
//         <Link key={campus.id} to={`/campus/${campus.id}`}>
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15, duration: 0.6 }}
//       whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
//       whileTap={{ scale: 0.97 }}
//       className="group cursor-pointer relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all"
//     >
//       <div className="relative z-10">
//         <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-xl mb-4 font-bold">
//           {campus.name.charAt(0)}
//         </div>

//         <h2 className="text-xl font-bold text-gray-800">
//           {campus.name}
//         </h2>

//         <p className="text-gray-500 mt-1">{campus.location}</p>

//         <div className="mt-5 flex items-center justify-between">
//           <span className="text-sm text-gray-600">Students</span>
//           <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
//             {campus.students}+
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   </Link>
// ))}
//       </div>
//     </section>
//   );
// }