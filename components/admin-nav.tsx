'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Boxes, Layers, PlusCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AdminNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/listings', label: 'All Listings', icon: Boxes },
    { href: '/admin/categories', label: 'By Category', icon: Layers },
    { href: '/admin/create', label: 'Create Product', icon: PlusCircle },
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
              <Icon className="w-5 h-5 stroke-[1.5]" />
              <span className="font-semibold text-sm tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#6A2A43] text-white rounded-lg font-semibold text-sm tracking-wide"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
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
              <Icon className="w-5 h-5 stroke-[1.5]" />
              <span className="font-semibold text-sm tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
