import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#241601] text-[#FCFCF9] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-extrabold tracking-[-0.02em] text-xl mb-4 text-white">Nav Sanyogita Foundation</h4>
            <p className="text-[#E8EBD8] text-sm leading-[1.8] font-medium">
              Empowering women through skill development, entrepreneurship, and sustainable livelihood programs.
            </p>
            <p className="text-white/60 text-xs mt-6 italic tracking-wide">
              कौशल से आत्मनिर्भरता
            </p>
          </div>
          <div>
            <h4 className="font-extrabold tracking-[-0.02em] mb-4 text-[#F46403] uppercase text-sm">Quick Links</h4>
            <ul className="text-[#E8EBD8] text-sm space-y-3 font-medium">
              <li><Link href="/" className="hover:text-[#F46403] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#F46403] transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-[#F46403] transition">Programs</Link></li>
              <li><Link href="/impact" className="hover:text-[#F46403] transition">Impact</Link></li>
              <li><Link href="/shop" className="hover:text-[#F46403] transition">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold tracking-[-0.02em] mb-4 text-[#F46403] uppercase text-sm">Programs</h4>
            <ul className="text-[#E8EBD8] text-sm space-y-3 font-medium">
              <li><a href="#" className="hover:text-[#F46403] transition">Tailoring & Stitching</a></li>
              <li><a href="#" className="hover:text-[#F46403] transition">Handicrafts</a></li>
              <li><a href="#" className="hover:text-[#F46403] transition">Digital Literacy</a></li>
              <li><a href="#" className="hover:text-[#F46403] transition">Entrepreneurship</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold tracking-[-0.02em] mb-4 text-[#F46403] uppercase text-sm">Contact Info</h4>
            <ul className="text-[#E8EBD8] text-sm space-y-4 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white stroke-[1.5]" />
                <span>Plot No - 469, Ground Floor, Opposite Chandra Laxmi Hospital, Sector - 4, Vaishali, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white stroke-[1.5]" />
                <a href="tel:9891075655" className="hover:text-[#F46403] transition">9891075655</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white stroke-[1.5]" />
                <a href="mailto:contact@navsanyogita.org" className="hover:text-[#F46403] transition text-sm">contact@navsanyogita.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="text-center mb-6">
            <p className="text-white font-bold tracking-[-0.02em] mb-4">Follow Us</p>
            <div className="flex justify-center gap-8 font-medium text-sm">
              <a href="#" className="text-white/80 hover:text-[#F46403] transition">Facebook</a>
              <a href="#" className="text-white/80 hover:text-[#F46403] transition">Instagram</a>
              <a href="#" className="text-white/80 hover:text-[#F46403] transition">Twitter</a>
              <a href="#" className="text-white/80 hover:text-[#F46403] transition">LinkedIn</a>
            </div>
          </div>
          <div className="text-center text-white/60 text-sm font-medium">
            <p>&copy; 2024 Nav Sanyogita Foundation. All rights reserved.</p>
            <p className="text-xs mt-3">महिला सशक्तिकरण हमारा संकल्प | Women Empowerment is Our Commitment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
