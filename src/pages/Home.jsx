import { motion } from "framer-motion";
import { useState } from "react";
import campuses from "../data/campuses";

import Banner from "../components/Banner";
import CampusCards from "../components/CampusCards";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(input.trim().toLowerCase());
  };

  const filteredCampuses = campuses.filter((campus) => {
    const name = campus?.name?.toLowerCase() || "";
    const location = campus?.location?.toLowerCase() || "";
    const query = search || "";

    return name.includes(query) || location.includes(query);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden bg-gradient-to-b from-white via-red-50 to-white"
    >

      {/* SEARCH BAR COMPONENT */}
      <div className="mt-10 mb-6">
        <SearchBar
          value={input}
          onChange={setInput}
          onSearch={handleSearch}
        />
      </div>

      <Banner />

      <CampusCards campuses={filteredCampuses} search={search} />
    </motion.div>
  );
}