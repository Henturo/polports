import React from "react";
function Skills() {
  const skills = ['React', 'Docker', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git', 'TypeScript', 'Python', 'Java', 'C++', 'REST APIs', 'GraphQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redux', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Agile', 'CI/CD', 'Linux', 'VS Code', 'Figma', 'Adobe XD', 'Problem Solving', 'Critical Thinking', 'Teamwork', 'Communication', 'Leadership', 'Time Management', 'Adaptability', 'Creativity', 'Research', 'Collaboration', 'Organization', 'Analytical Thinking', 'Presentation Skills', 'Project Management', 'Continuous Learning', 'Attention to Detail', 'Interpersonal Skills'
];
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div>
        {skills.map((item, i) => (
          <span className="badge" key={i}>{item}</span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
