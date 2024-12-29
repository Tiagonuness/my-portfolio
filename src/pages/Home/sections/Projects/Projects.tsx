// Projects.tsx
import React from "react";
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div id="projectsSection" className="projects">
        <div className="row">
            <div id="tituloProjects" className="col-lg-12 d-flex justify-content-center">
                <h2 className="text-center mt-4" data-shadow="PROJETOS">PROJETOS</h2>
            </div>
            <div id="projectsExemplas"></div>
        </div>
    </div>
  );
};

export default Projects;