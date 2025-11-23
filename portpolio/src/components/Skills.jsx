import React from "react";
function Skills() {
  const skills = ['React', 'Docker', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git'];
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
