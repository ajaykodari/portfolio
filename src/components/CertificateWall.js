import React from 'react';

const certifications = [
  "R Programming – Spoken Tutorial Project, IIT Bombay",
  "Data Science for Engineers – NPTEL",
  "User-centric Computing for HCI – NPTEL",
  "Python Development – Udemy",
  "Data Analyst – Udemy"
];

export default function CertificateWall() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transform transition">
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
