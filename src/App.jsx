// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from './components/Footer'
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Classes from "./pages/Classes";
// import Campuses from "./pages/Campuses";
// import Contact from "./pages/Contact";
// import Admission from "./pages/Admission";


// export default function App() {
//   return (
//     <Router>
//       <Navbar />

//       <div className="pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/campus/:id" element={<Campuses/>} />
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/classes" element={<Classes/>} />
//           <Route path="/admission" element={<Admission/>} />
//         </Routes>
//       </div>
//       <Footer/>
//     </Router>
//   );
// }




























import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Campuses from "./pages/Campuses";
import CampusPage from "./pages/CampusPage";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";

export default function App() {
  return (
    <Router>
      <Navbar />

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

      <Footer />
    </Router>
  );
}