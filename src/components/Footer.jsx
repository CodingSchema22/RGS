export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-20">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Logo / About */}
        {/* <div>
          <h2 className="text-2xl font-bold text-red-500">RGS School</h2>
          <p className="text-gray-400 mt-3 text-sm leading-6">
            Providing quality education from Nursery to Matric with modern
            learning systems, experienced teachers, and a strong academic
            foundation.
          </p>
        </div> */}

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Campuses</li>
            <li className="hover:text-white transition cursor-pointer">Admission</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div> */}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            📍 Lahore, Pakistan
          </p>
          <p className="text-gray-400 text-sm mt-2">
            📞 +92 300 0000000
          </p>
          <p className="text-gray-400 text-sm mt-2">
            ✉ info@rgs.edu.pk
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RGS School. All Rights Reserved.
      </div>
    </footer>
  );
}