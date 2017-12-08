import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import Todo from './Components/Todo'
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();

    //state in constructor
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }

  getProjects() {
    this.setState({projects: [
      {
          id: uuid.v4(),
          title: "Business website",
          category: "Web design"
      },
      {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Dev"
      },
      {
          id: uuid.v4(),
          title: "Shopping cart",
          category: "Web Dev"
      }
    ]});
  }

  //life cycle method fires when the component is re-rendered
  componentWillMount() {
    //AJAX or componentDidMount
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
       My app
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects onDeleteProject={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
       <Todo todoItems={this.state.todos} />
      </div>
    );
  }
}

export default App;
