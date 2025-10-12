import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img 
            src="/assets/avatar-placeholder.png" 
            alt="Ajay Kodari" 
            className="rounded-full shadow-lg w-full"
          />
        </div>
        <div className="md:w-2/3 text-lg">
          <p>
            Motivated individual seeking an entry-level position to leverage my technical skills and contribute to innovative projects.
            Committed to continuous learning and delivering impactful results in a dynamic team environment.
          </p>
        </div>
      </div>
    </div>
  );
}
