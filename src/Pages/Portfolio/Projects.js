import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from '../../assest/project-1.png'
import project3 from '../../assest/project-2.png'
import project2 from '../../assest/project-3.png'

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl text-primary text-center underline my-16">
        My Projects
      </h2>
      <div className="lg:grid grid-cols-3">
          <ProjectCard img={project1} site="https://creative-agency-1c6db.firebaseapp.com/" />
          <ProjectCard img={project2} site="https://naughty-minsky-470ec1.netlify.app/" />
          <ProjectCard img={project3} site="https://istiakhasan.github.io/React_resume/" />
         
      </div>
    </div>
  );
};

export default Projects;
