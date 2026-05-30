import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D2D2D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#CF8322]">Nav Sanyogita Foundation</h4>
            <p className="text-gray-300 text-sm">
              Empowering women through skill development, entrepreneurship, and sustainable livelihood programs.
            </p>
            <p className="text-gray-400 text-xs mt-4 italic">
              कोशल से आत्मनिर्भरता
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#C53357]">Quick Links</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition">Programs</Link></li>
              <li><Link href="/impact" className="hover:text-white transition">Impact</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#C53357]">Programs</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Tailoring & Stitching</a></li>
              <li><a href="#" className="hover:text-white transition">Handicrafts</a></li>
              <li><a href="#" className="hover:text-white transition">Digital Literacy</a></li>
              <li><a href="#" className="hover:text-white transition">Entrepreneurship</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#C53357]">Contact Info</h4>
            <ul className="text-gray-300 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#CF8322]" />
                <span>Plot No - 469, Ground Floor, Opposite Chandra Laxmi Hospital, Sector - 4, Vaishali, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CF8322]" />
                <a href="tel:9891075655" className="hover:text-white transition">9891075655</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CF8322]" />
                <a href="mailto:contact@navsanyogita.org" className="hover:text-white transition text-xs">contact@navsanyogita.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center mb-6">
            <p className="text-[#CF8322] font-semibold mb-2">Follow Us</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-300 hover:text-[#C53357] transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-[#C53357] transition">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-[#C53357] transition">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-[#C53357] transition">LinkedIn</a>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Nav Sanyogita Foundation. All rights reserved.</p>
            <p className="text-xs mt-2">महिला सशक्तिकरण हमारा संकल्प | Women Empowerment is Our Commitment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
