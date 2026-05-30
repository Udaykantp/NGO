'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Package, Grid3x3, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AdminNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/listings', label: 'All Listings', icon: Package },
    { href: '/admin/categories', label: 'By Category', icon: Grid3x3 },
    { href: '/admin/create', label: 'Create Product', icon: Grid3x3 },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                active
                  ? 'bg-[#6A2A43] text-white'
                  : 'text-[#6A2A43] hover:bg-[#F5E6D3]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#6A2A43] text-white rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          Admin Menu
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-2 mb-6 bg-white rounded-lg p-4 border border-[#D2BEB5]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  active
                    ? 'bg-[#6A2A43] text-white'
                    : 'text-[#6A2A43] hover:bg-[#F5E6D3]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
