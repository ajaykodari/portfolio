import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container-max mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <Link to="/">Ajay Kodari</Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <Link to="/about" className="hover:text-sky-600">About</Link>
          <Link to="/education" className="hover:text-sky-600">Education</Link>
          <Link to="/skills" className="hover:text-sky-600">Skills</Link>
          <Link to="/projects" className="hover:text-sky-600">Projects</Link>
          <Link to="/certifications" className="hover:text-sky-600">Certifications</Link>
          <Link to="/achievements" className="hover:text-sky-600">Achievements</Link>
          <Link to="/contact" className="bg-sky-600 text-white px-3 py-1 rounded">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 py-4 bg-white dark:bg-gray-800 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link to="/education" onClick={() => setOpen(false)} className="block">Education</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="block">Skills</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block">Projects</Link>
          <Link to="/certifications" onClick={() => setOpen(false)} className="block">Certifications</Link>
          <Link to="/achievements" onClick={() => setOpen(false)} className="block">Achievements</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
