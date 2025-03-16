"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/juegos', label: 'Juegos' },
    { href: '/software', label: 'Software' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f1118]/95 backdrop-blur-lg border border-purple-500/20 rounded-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Use justify-between */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            {/* Hamburger Menu Button (Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <div className={`sm:flex items-center space-x-4 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#0f1118]/95 backdrop-blur-lg border border-purple-500/20 rounded-b-xl shadow-lg py-4' : 'hidden'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {pathname === item.href && (
                    <motion.span
                      layoutId="activePage"
                      className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}