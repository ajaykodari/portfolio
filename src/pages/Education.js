import React from 'react';

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    college: "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad",
    years: "2021 – 2025"
  }
];

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{edu.college}</p>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{edu.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
