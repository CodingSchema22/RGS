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
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{campus.name}</h1>
      <p className="text-gray-500 mt-2">{campus.location}</p>

      <div className="mt-6 p-6 bg-white shadow rounded-xl">
        <p>{campus.description}</p>

        <div className="mt-4">
          <p>🏫 Students: {campus.students}+</p>
          <p>📅 Established: {campus.established}</p>
        </div>
      </div>
    </div>
  );
}