import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {
  constructor() {
    super();

    //state in constructor
    this.state = {
      projects: []
    }
  }

  //life cycle method fires when the component is re-rendered
  componentWillMount() {
    //AJAX or componentDidMount
    this.setState({projects: [
      {
          title: "Business website",
          category: "Web design"
      },
      {
          title: "Social App",
          category: "Mobile Dev"
      },
      {
          title: "Shopping cart",
          category: "Web Dev"
      }
    ]});
  }

  render() {
    return (
      <div className="App">
       My app
       <AddProject />
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
