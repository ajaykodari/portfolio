import React from 'react';

const projects = [
  {
    title: "Sales Data Analysis Dashboard",
    description: "Analyzed retail sales dataset and built dashboards to present insights.",
    tech: "Python, Pandas, NumPy, Matplotlib, Power BI, Excel",
    link: "#"
  },
  {
    title: "COVID-19 Data Exploration",
    description: "Collected, cleaned, and visualized COVID-19 data to track trends.",
    tech: "Python, Pandas, SQL, Matplotlib, Seaborn",
    link: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio to showcase projects and skills, deployed on GitHub Pages.",
    tech: "HTML, CSS, JavaScript, GitHub Pages",
    link: "#"
  }
];

export default function ProjectShelf() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transform transition">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400"><strong>Tech Stack:</strong> {project.tech}</p>
            {project.link && (
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
