'use client';

import { Menu, X, Heart, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/app/auth-provider';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { user, loading, logout } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      href: '/programs', 
      label: 'Programs',
      dropdown: [
        { href: '/programs#tailoring', label: 'Tailoring & Stitching' },
        { href: '/programs#handicrafts', label: 'Handicrafts & Embroidery' },
        { href: '/programs#digital-literacy', label: 'Digital Literacy' },
        { href: '/programs#beauty-wellness', label: 'Beauty & Wellness' },
        { href: '/programs#entrepreneurship', label: 'Entrepreneurship' },
        { href: '/programs#menstrual-health', label: 'Menstrual Health' },
      ]
    },
    { href: '/impact', label: 'Impact' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="relative bg-[#241601] text-[13px] font-sans antialiased overflow-hidden border-b border-black/20">
        {/* Repeating Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: 'url("/NavSonogita2.png")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-2.5 sm:flex-row sm:gap-0">
          
          {/* Left Side: Tagline */}
          <div className="flex items-center text-white/90 font-medium tracking-wide">
            <span>कौशल से आत्मनिर्भरता | Empowering Women</span>
          </div>

          {/* Right Side: Contact Number */}
          <div className="flex items-center gap-2">
            <span className="text-white/60">Call us:</span>
            <Link 
              href="tel:9891075655" 
            className="text-white font-medium transition-colors duration-300 hover:text-[#EA7214]"
            >
              9891075655
            </Link>
          </div>

        </div>
      </div>

      {/* Header/Navigation */}
      <header className="w-full bg-white/85 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 font-sans antialiased shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="ml-4">
              <Image 
                src="/NavSanyogitaLogo.png" 
                alt="Nav Sanyogita Foundation Logo" 
                width={180} 
                height={60} 
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="font-semibold text-[15px] tracking-wide text-[#241601]/90 hover:text-[#F46403] transition-colors duration-300 relative flex items-center gap-1.5 group/link py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-4 h-4 text-[#241601]/70 group-hover/link:text-[#F46403] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#F46403] group-hover/link:w-full transition-all duration-300 rounded-full"></span>
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden w-64 flex flex-col py-3">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="px-6 py-2.5 text-[15px] font-medium text-[#241601]/80 hover:bg-[#F46403]/5 hover:text-[#F46403] transition-colors duration-200"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 text-[#241601]/90 hover:text-[#F46403] font-semibold text-[15px] tracking-wide transition-colors duration-300"
                    >
                      <User className="w-5 h-5 stroke-[1.5]" />
                      {user.displayName || 'Profile'}
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 bg-white/50 border border-gray-200 text-[#241601]/90 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm tracking-wide px-6 py-[10px] rounded-full transition-all duration-300 shadow-sm"
                    >
                      <LogOut className="w-4 h-4 stroke-[1.5]" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-[#241601]/90 hover:text-[#F46403] font-semibold text-[15px] tracking-wide transition-colors duration-300 mr-2"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="bg-white/50 border border-gray-200 text-[#241601]/90 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm tracking-wide px-6 py-[10px] rounded-full transition-all duration-300 shadow-sm"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                <a
                  href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#5C4033] hover:bg-[#422E25] hover:-translate-y-0.5 text-white font-bold text-sm tracking-wide px-6 py-[10px] rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(92,64,51,0.2)] hover:shadow-[0_6px_20px_rgba(92,64,51,0.3)]"
                >
                  <Heart className="w-5 h-5 stroke-[1.5]" fill="currentColor" />
                  Donate
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#241601] hover:text-[#F46403] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 py-4 px-4 shadow-2xl font-sans antialiased">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <div className="flex items-center justify-between font-semibold text-base tracking-wide text-[#241601]/90 hover:text-[#F46403] py-2 transition-colors">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-grow"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === link.href ? null : link.href);
                        }}
                        className="p-1.5 -mr-1 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle dropdown"
                      >
                        <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === link.href ? 'rotate-180 text-[#F46403]' : 'text-[#241601]/70'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.dropdown && openDropdown === link.href && (
                    <div className="flex flex-col pl-4 border-l-2 border-gray-200 ml-2 mt-1 gap-1">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[15px] font-medium text-[#241601]/70 hover:text-[#F46403] py-2 transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-100 pt-4 mt-3 flex flex-col gap-3">
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Link
                          href="/profile"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-[#241601]/90 hover:text-[#F46403] font-semibold text-base tracking-wide py-2"
                        >
                          <User className="w-5 h-5 stroke-[1.5]" />
                          {user.displayName || 'Profile'}
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-[#241601]/90 hover:bg-gray-100 font-semibold text-base tracking-wide px-4 py-2.5 rounded-xl transition-all duration-300 w-full justify-center shadow-sm"
                        >
                          <LogOut className="w-4 h-4 stroke-[1.5]" />
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[#241601]/90 hover:text-[#F46403] font-semibold text-base tracking-wide py-2 text-center border border-transparent"
                        >
                          Login
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setMobileMenuOpen(false)}
                          className="bg-gray-50 border border-gray-200 hover:bg-gray-100 text-[#241601]/90 font-semibold text-base tracking-wide px-6 py-2.5 rounded-xl transition-all duration-300 text-center shadow-sm"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                    <a
                      href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5C4033] hover:bg-[#422E25] text-white font-bold text-base tracking-wide px-6 py-2.5 rounded-xl transition-all duration-300 text-center w-full flex items-center justify-center gap-2 shadow-md"
                    >
                      <Heart className="w-5 h-5 stroke-[1.5]" fill="currentColor" />
                      Donate
                    </a>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
