import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { category: "Programming Languages", list: ["Java", "Python", "C", "C++"] },
    {
      category: "Web Technologies",
      list: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    { category: "Databases", list: ["MySQL"] },
    { category: "Cloud Computing", list: ["Azure"] },
    {
      category: "Soft Skills",
      list: ["Problem Solving", "Communication", "Teamwork", "Leadership"],
    },
  ];

  const tools = ["VS Code", "Eclipse", "MySQL Workbench", "Tableau", "Excel"];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title animate__animated animate__fadeIn">
        Skills
      </h2>
      <div className="skills-container">
        {skills.map((skillSet, index) => (
          <div
            key={index}
            className="skill-category animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{skillSet.category}</h3>
            <ul>
              {skillSet.list.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-title animate__animated animate__fadeIn">
        Tools & Frameworks
      </h2>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="tool-item animate__animated animate__fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
