import { useParams } from "react-router-dom";
import campuses from "../data/campuses";
import { Links } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function CampusPage() {
  const { id } = useParams();

  const campus = campuses.find((c) => c.id === id);

  if (!campus) return <h1>Campus not found</h1>;

  return (
    <>
          <Navbar />
    <div className="p-10">
      <h1 className="text-3xl font-bold">{campus.name}</h1>
      <p className="text-gray-600 mt-2">{campus.location}</p>
      <p className="mt-4">Students: {campus.students}+</p>
      <p className="mt-4">Students: {campus.facilities}+</p>
      <p className="mt-4">Students: {campus.description}+</p>
      <p className="mt-4">Students: {campus.principal}+</p>


    </div>
    </>

  );
}