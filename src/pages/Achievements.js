import React from 'react';

const achievements = [
  "Achieved 5* in HackerRank – Problem Solving",
  "Silver Certificate with a score of 75 in Data Science for Engineers (NPTEL)",
  "Head Volunteer — G-jeevan club — Led a team of volunteers and organized community service events"
];

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Achievements & Activities</h2>
      <ul className="space-y-4 list-disc list-inside">
        {achievements.map((ach, i) => (
          <li key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow">{ach}</li>
        ))}
      </ul>
    </div>
  );
}
