import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectDetails2Dark from "../pages/project-details2-dark";
import ProjectData from "../../data/project-details2.json";

const ProjectDetails2Router = () => {
  return (
    <Router>
      <div>
        {ProjectData.map((project) => (
          <Route
            key={project.id}
            path={`/project-details2/project-details2-dark/${project.id}`}
          >
            <ProjectDetails2Dark project={project} />
          </Route>
        ))}
      </div>
    </Router>
  );
};

export default ProjectDetails2Router;
