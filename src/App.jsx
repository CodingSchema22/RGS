import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

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
  const [search, setSearch] = useState("");

  return (
    <Router>

      {/* 🔍 GLOBAL SEARCH BAR */}
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={() => console.log(search)}
      />

      <Navbar />
      <ScrollToTop />

      <div className="pt-20 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/campus/:id" element={<CampusPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </div>

      <AboutSection />
      <Stats />
      <GalleryPreview />

      <div className="px-3">
        <div className="h-1 bg-red-500 mx-auto rounded-full" />
      </div>

      <EventsPreview />
      <FinalCTA />
      <Facilities />

      <div className="px-3">
        <div className="h-1 bg-red-500 mx-auto rounded-full" />
      </div>

      <Testimonials />
      <Footer />

    </Router>
  );
}