import React from 'react';

export default function Desk() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="/assets/avatar-placeholder.png" alt="Ajay Kodari" className="md:w-56 w-40 rounded-full shadow-lg" />
        <div className="md:w-2/3 text-lg">
          <p>
            Motivated individual seeking an entry-level position to leverage my technical skills and contribute to innovative projects.
            Committed to continuous learning and delivering impactful results in a dynamic team environment.
          </p>
          <div className="mt-6 space-y-2">
            <p><strong>Contact:</strong> +91 9392713425</p>
            <p><strong>Email:</strong> ajaykodari25@gmail.com</p>
            <p><strong>LinkedIn:</strong> <span className="text-sky-600">LinkedIn profile link</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
