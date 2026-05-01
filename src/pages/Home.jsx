import { motion } from "framer-motion";
// import Hero3D from "../components/Hero3D";
import Banner from "../components/Banner";

import CampusCards from "../components/CampusCards";

import NewsScroller from "../components/Newsscroller";


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-white via-red-50 to-white"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full">
      </div>
        {/* <Hero3D /> */}
        <Banner/>
        {/* Divider */}
        {/* <div className="px-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </div> */}
        
        <CampusCards />

    </motion.div>
  );
}