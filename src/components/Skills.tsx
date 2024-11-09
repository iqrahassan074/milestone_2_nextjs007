import React from 'react';
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-content">
        <div data-aos="flip-left">
          <h1 className="skills-heading">Technologies</h1>
          <p className="skills-description">
            With a solid foundation in web development, I am proficient in a range of technologies, including TypeScript, HTML, CSS, and JavaScript, enabling me to create dynamic and responsive user interfaces. My expertise extends to Next.js, which I leverage to build performant and scalable applications. I am committed to writing clean, maintainable code and employing best practices in front-end development to deliver exceptional user experiences.
          </p>
        </div>
        <div>
          <div className="skills-list">
            <div className="skills-group">
              <h2 data-aos="flip-left" className="skill">JAVASCRIPT</h2>
              <h2 data-aos="flip-left" className="skill">NODE.JS</h2>
              <h2 data-aos="flip-left" className="skill">NEXT.JS</h2>
              <h2 data-aos="flip-left" className="skill">REACT.JS</h2>
            </div>
            <div className="skills-group">
              <h2 data-aos="flip-left" className="skill">TYPESCRIPT</h2>
              <h2 data-aos="flip-left" className="skill">HTML</h2>
              <h2 data-aos="flip-left" className="skill">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

