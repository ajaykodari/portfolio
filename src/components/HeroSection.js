import React from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  React.useEffect(() => {
    gsap.from(".hero-text", { y: -50, opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h1 className="text-5xl font-bold hero-text">Hi, I'm Ajay Kodari</h1>
      <p className="mt-4 text-xl hero-text">Motivated IT Graduate | Data Analyst | Problem Solver</p>
      <a href="/contact" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition">
        Get in Touch
      </a>
    </section>
  );
}
