import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            Rakan Grammar School
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Providing quality education from Nursery to Matric with a focus on
            discipline, academic excellence, and modern learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Admissions</li>
            <li className="hover:text-white cursor-pointer">Facilities</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Shahodi Garhi, Punjab
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +92 300 0000000
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@rgs.edu.pk
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-3">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-red-600 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-red-600 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-red-600 cursor-pointer transition">
              <FaYoutube />
            </div>
          </div>

          <p className="mt-4 text-gray-400 text-sm">
            Stay connected for updates, events & announcements.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Rakan Grammar School. All rights reserved.
      </div>
    </footer>
  );
}