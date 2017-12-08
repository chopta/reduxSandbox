import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

class Todo extends Component {
  deleteProject(id) {
    this.props.onDeleteProject(id);
  }

  render() {
    let todoItems;
    if(this.props.todoItems) {
      todoItems = this.props.todoItems.map(t => {
        return (
          <TodoItem key={t.title} todoItem={t} />
        );
      });
    }

    return (
      <div className="dotos">
        <h3>latest Todos</h3>
        {todoItems}
      </div>
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array
}

export default Todo;
