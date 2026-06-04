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
      <div className="relative bg-[#27190F] text-[13px] font-sans overflow-hidden border-b border-black/20">
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
      <header className="w-full bg-[#FCFCF9] border-b border-[rgba(36,22,1,0.08)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="ml-4">
              <div className="font-extrabold text-xl tracking-[-0.05em] text-[#211600]">Nav Sanyogita</div>
              <div className="text-xs tracking-wider text-[#6E675A] font-semibold">FOUNDATION</div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="font-semibold text-sm tracking-wide text-[#211600] hover:text-[#F46403] transition relative flex items-center gap-1 group/link py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-4 h-4 text-[#211600] group-hover/link:text-[#F46403] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#F46403] group-hover/link:w-full transition-all duration-300"></span>
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-[16px] shadow-[0_18px_40px_rgba(20,12,0,0.12)] border border-[rgba(36,22,1,0.06)] overflow-hidden w-64 flex flex-col py-2">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="px-5 py-2.5 text-sm font-semibold text-[#6E675A] hover:bg-[#F8F8F0] hover:text-[#F46403] transition-colors"
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
                      className="flex items-center gap-2 text-[#211600] hover:text-[#F46403] font-semibold text-sm tracking-wide"
                    >
                      <User className="w-5 h-5 stroke-[1.5]" />
                      {user.displayName || 'Profile'}
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 bg-transparent border border-[rgba(36,22,1,0.15)] text-[#241601] hover:bg-[#241601]/5 font-semibold text-sm tracking-wide px-6 py-[10px] rounded-full transition duration-300"
                    >
                      <LogOut className="w-4 h-4 stroke-[1.5]" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-[#211600] hover:text-[#F46403] font-semibold text-sm tracking-wide"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="bg-transparent border border-[rgba(36,22,1,0.15)] text-[#241601] hover:bg-[#241601]/5 font-semibold text-sm tracking-wide px-6 py-[10px] rounded-full transition duration-300"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                <a
                  href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#F46403] hover:bg-[#D95200] text-white font-bold text-sm tracking-wide px-6 py-[10px] rounded-full transition duration-300 shadow-md"
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
            className="md:hidden text-[var(--color-heading)] hover:text-[var(--color-accent)]"
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
          <div className="md:hidden bg-[var(--color-background)] border-t border-[#DFE2CF] py-4 px-4 shadow-lg">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-semibold text-sm tracking-wide text-[var(--color-heading)] hover:text-[var(--color-accent)] py-2 transition flex items-center justify-between"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 border-l-2 border-[#DFE2CF] ml-2 mt-1 gap-1">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-semibold text-[var(--color-heading)]/80 hover:text-[var(--color-accent)] py-2 transition"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-[#DFE2CF] pt-3 mt-3 flex flex-col gap-2">
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Link
                          href="/profile"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-[var(--color-heading)] hover:text-[var(--color-accent)] font-semibold text-sm tracking-wide py-2"
                        >
                          <User className="w-5 h-5 stroke-[1.5]" />
                          {user.displayName || 'Profile'}
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 bg-transparent border-2 border-[var(--color-heading)] text-[var(--color-heading)] hover:bg-[var(--color-heading)] hover:text-[var(--color-white)] font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition w-full justify-center shadow-sm"
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
                          className="text-[var(--color-heading)] hover:text-[var(--color-accent)] font-semibold text-sm tracking-wide py-2"
                        >
                          Login
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setMobileMenuOpen(false)}
                          className="bg-transparent border-2 border-[var(--color-heading)] hover:bg-[var(--color-heading)] hover:text-[var(--color-white)] text-[var(--color-heading)] font-semibold text-sm tracking-wide px-6 py-2 rounded-full transition text-center shadow-sm"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                    <a
                      href="https://wa.me/9891075655?text=Hello! I would like to make a donation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--color-accent)] hover:opacity-90 text-[var(--color-white)] font-semibold text-sm tracking-wide px-6 py-2 rounded-lg transition text-center w-full flex items-center justify-center gap-2 shadow-md"
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
