import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
      categories: ['Web Design', 'Web Dev', 'Mobile Dev']
  }

  render() {
    let categoryOptions = this.props.categories.map(c => {
      return <option key={c} value="category">{c}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
