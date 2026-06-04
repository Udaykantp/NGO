import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#241601] relative overflow-hidden font-sans antialiased">
      {/* Subtle Top Border/Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F46403] via-[#F9D05F] to-[#4E9B71]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="inline-flex bg-white/95 p-4 rounded-2xl mb-8 hover:opacity-90 transition shadow-lg border border-white/10 relative group">
              <div className="absolute inset-0 bg-[#F46403] rounded-2xl opacity-0 group-hover:opacity-10 scale-105 transition-all duration-300"></div>
              <Image 
                src="/NavSanyogitaLogo.png" 
                alt="Nav Sanyogita Foundation Logo" 
                width={200} 
                height={66} 
                className="h-12 w-auto object-contain relative z-10"
              />
            </Link>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              Empowering women through skill development, entrepreneurship, and sustainable livelihood programs to build a self-reliant society.
            </p>
            <div className="inline-block bg-white/10 border border-white/20 rounded-xl px-5 py-3 border-l-4 border-l-[#F46403]">
              <p className="text-white text-base font-bold tracking-wide">कौशल से आत्मनिर्भरता</p>
              <p className="text-white/70 text-sm mt-1">Skill-based Self Reliance</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold tracking-wide text-white text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#F46403] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Impact', href: '/impact' },
                { label: 'Shop', href: '/shop' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center text-white/80 hover:text-[#F46403] transition-colors duration-300 text-base">
                    <span className="w-2 h-2 rounded-full bg-[#F46403] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold tracking-wide text-white text-xl mb-6 relative inline-block">
              Our Programs
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#F9D05F] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Tailoring & Stitching', href: '/programs#tailoring' },
                { label: 'Handicrafts & Embroidery', href: '/programs#handicrafts' },
                { label: 'Digital Literacy', href: '/programs#digital-literacy' },
                { label: 'Beauty & Wellness', href: '/programs#beauty-wellness' },
                { label: 'Entrepreneurship', href: '/programs#entrepreneurship' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center text-white/80 hover:text-[#F9D05F] transition-colors duration-300 text-base">
                    <span className="w-2 h-2 rounded-full bg-[#F9D05F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold tracking-wide text-white text-xl mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#4E9B71] rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#4E9B71] transition-colors duration-300 flex-shrink-0 shadow-sm border border-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 text-base leading-relaxed pt-2.5">Plot No - 469, Ground Floor, Opposite Chandra Laxmi Hospital, Sector - 4, Vaishali, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F46403] transition-colors duration-300 flex-shrink-0 shadow-sm border border-white/10">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:9891075655" className="text-white/90 text-base hover:text-white transition-colors duration-300">
                  +91 98910 75655
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F9D05F] transition-colors duration-300 flex-shrink-0 shadow-sm border border-white/10">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:contact@navsanyogita.org" className="text-white/90 text-base hover:text-white transition-colors duration-300">
                  contact@navsanyogita.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-white/90 text-base">
              &copy; {currentYear} Nav Sanyogita Foundation. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-2">
              महिला सशक्तिकरण हमारा संकल्प | Women Empowerment is Our Commitment
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-4 order-1 md:order-2">
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#F46403] hover:border-[#F46403] transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#C53357] hover:border-[#C53357] transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#F9D05F] hover:border-[#F9D05F] transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#4E9B71] hover:border-[#4E9B71] transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
