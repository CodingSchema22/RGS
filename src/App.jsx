import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Newsscroller from './components/Newsscroller'
import Home from "./pages/Home";
import About from "./pages/About";
import Campuses from "./pages/Campuses";
import CampusPage from "./pages/CampusPage";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import AboutSection from "./components/AboutSections";
import Facilities from "./components/Facilities";
import Stats from "./components/Stats";
import GalleryPreview from "./components/GalleryPreview";
import EventsPreview from "./components/EventsPreview";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>

      <div className="pt-20 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* NEW SYSTEM */}

          <Route path="/campuses" element={<Campuses />} />
<Route path="/campus/:id" element={<CampusPage />} />

          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </div>
      <AboutSection/>
      {/* Divider */}
      <div className="px-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </div>
      <Facilities/>
      <Stats/>
      <GalleryPreview/>
        <div className="px-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </div>
      
      <EventsPreview/>
      {/* Divider */}
      <div className="px-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </div>
      <Testimonials/>
      <FinalCTA/>
            <Footer />
    </Router>
  );
}













































// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Campuses from "./pages/Campuses";
// import CampusPage from "./pages/CampusPage";
// import Classes from "./pages/Classes";
// import Contact from "./pages/Contact";
// import Admission from "./pages/Admission";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />

//       <div className="pt-20 min-h-screen flex flex-col">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />

//           {/* NEW SYSTEM */}
//           <Route path="/campuses" element={<Campuses />} />
//           <Route path="/campus/:id" element={<CampusPage />} />

//           <Route path="/classes" element={<Classes />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/admission" element={<Admission />} />
//         </Routes>
//       </div>

//       <Footer />
//     </Router>
//   );
// }