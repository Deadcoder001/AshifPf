import React from 'react';
import logo from '../assets/logo3.png'; // Make sure this path is correct

/**
 * A minimal, transparent navigation bar.
 * It uses Flexbox to space out the logo and navigation links.
 * The `z-30` class ensures it sits on top of other content.
 */
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-6">
      <nav className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" className="w-28 h-6" /> {/* Adjust size as needed */}
        </a>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-sm font-medium text-white/90 sm:gap-6">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}