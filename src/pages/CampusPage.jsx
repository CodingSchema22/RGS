import { useParams } from "react-router-dom";
import campuses from "../data/campuses";

export default function CampusPage() {
  const { id } = useParams();

  const campus = campuses.find((c) => c.id === id);

  if (!campus) {
    return (
      <div className="p-10 text-center text-red-500">
        Campus not found
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-16 px-6">

  <div className="max-w-5xl mx-auto">

    {/* Header Card */}
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-10 text-center">
      
      <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
        {campus.name}
      </h1>

      <p className="text-gray-500 mt-3 text-lg">
        {campus.location}
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">

        <div className="px-6 py-3 bg-red-100 text-red-600 rounded-2xl font-semibold shadow-sm">
          🏫 {campus.students}+ Students
        </div>

        <div className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl font-semibold shadow-sm">
          📅 Established {campus.established}
        </div>

      </div>
    </div>

    {/* Description Section */}
    <div className="mt-10 bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-3xl p-10">

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        About This Campus
      </h2>

      <p className="text-gray-600 leading-relaxed text-lg">
        {campus.description}
      </p>

    </div>

  </div>
</div>
  );
}