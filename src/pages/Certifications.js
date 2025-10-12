import React from 'react';

const certifications = [
  "R Programming – Spoken Tutorial Project, IIT Bombay",
  "Data Science for Engineers – NPTEL",
  "User-centric Computing for HCI – NPTEL",
  "Python Development – Udemy",
  "Data Analyst – Udemy"
];

export default function Certifications() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Certifications</h2>
      <ul className="space-y-4 list-disc list-inside">
        {certifications.map((cert, i) => (
          <li key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow">{cert}</li>
        ))}
      </ul>
    </div>
  );
}
