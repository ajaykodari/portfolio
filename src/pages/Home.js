import React from 'react';
import { gsap } from 'gsap';

export default function Home() {
  React.useEffect(() => {
    gsap.from(".hero-text", { y: -50, opacity: 0, duration: 1 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl font-bold hero-text">Hi, I'm Ajay Kodari</h1>
      <p className="mt-4 text-xl hero-text">Motivated IT Graduate | Data Analyst | Problem Solver</p>
      <div className="mt-6">
        <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
