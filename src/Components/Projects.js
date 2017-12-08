import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDeleteProject(id);
  }

  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(p => {
        return (
          <ProjectItem key={p.title} onDelete={this.deleteProject.bind(this)} project={p} />
        );
      });
    }

    return (
      <div className="Projects">
        <h3>latest Project</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDeleteProject: PropTypes.func
}

export default Projects;
