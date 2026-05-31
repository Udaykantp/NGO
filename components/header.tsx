'use client';

import { Menu, X, Heart, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/app/auth-provider';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-[#CF8322] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm flex-wrap">
          <span className="font-semibold tracking-wide">कोशल से आत्मनिर्भरता | Empowering Women</span>
          <span className="mx-2">|</span>
          <a href="tel:9891075655" className="underline font-semibold tracking-wide hover:text-gray-100">
            📞 9891075655
          </a>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="w-full bg-white border-b-4 border-[#6A2A43] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6A2A43] to-[#C53357] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">👩</span>
            </div>
            <div>
              <div className="font-bold text-xl tracking-wide text-[#6A2A43]">Nav Sanyogita</div>
              <div className="text-xs tracking-wider text-[#C53357] font-semibold">FOUNDATION</div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-sm tracking-wide text-[#6A2A43] hover:text-[#C53357] transition relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CF8322] group-hover:w-full transition-all duration-300"></span>
              </Link>
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
                      className="flex items-center gap-2 text-[#6A2A43] hover:text-[#C53357] font-semibold text-sm tracking-wide"
                    >
                      <User className="w-5 h-5 stroke-[1.5]" />
                      {user.displayName || 'Profile'}
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition"
                    >
                      <LogOut className="w-4 h-4 stroke-[1.5]" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-[#6A2A43] hover:text-[#C53357] font-semibold text-sm tracking-wide"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="bg-[#C53357] hover:bg-[#6A2A43] text-white font-semibold text-sm tracking-wide px-6 py-2 rounded-full transition shadow-lg"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                <a
                  href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition"
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
            className="md:hidden text-[#6A2A43] hover:text-[#C53357]"
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
          <div className="md:hidden bg-white border-t border-[#D2BEB5] py-4 px-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-sm tracking-wide text-[#6A2A43] hover:text-[#C53357] py-2 transition"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[#D2BEB5] pt-3 mt-3 flex flex-col gap-2">
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Link
                          href="/profile"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-[#6A2A43] hover:text-[#C53357] font-semibold text-sm tracking-wide py-2"
                        >
                          <User className="w-5 h-5 stroke-[1.5]" />
                          {user.displayName || 'Profile'}
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition w-full justify-center"
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
                          className="text-[#6A2A43] hover:text-[#C53357] font-semibold text-sm tracking-wide py-2"
                        >
                          Login
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setMobileMenuOpen(false)}
                          className="bg-[#C53357] hover:bg-[#6A2A43] text-white font-semibold text-sm tracking-wide px-6 py-2 rounded-full transition text-center"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                    <a
                      href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm tracking-wide px-6 py-2 rounded-lg transition text-center w-full flex items-center justify-center gap-2"
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
