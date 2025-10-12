import React from 'react';

const skills = [
  { name: 'Python', details: 'Pandas, NumPy, Matplotlib' },
  { name: 'SQL', details: 'MySQL, Data Querying' },
  { name: 'Data Visualization', details: 'Power BI, Tableau' },
  { name: 'Tools', details: 'Excel, GitHub, VS Code, Jupyter Notebook' },
  { name: 'Soft Skills', details: 'Problem Solving, Team Collaboration, Communication' },
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold">{skill.name}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{skill.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
