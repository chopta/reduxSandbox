import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(p => {
        return (
          <ProjectItem key={p.title} project={p} />
        );
      });
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
