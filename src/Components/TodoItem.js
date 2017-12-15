import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    return (
      <li className="todoItem">
          <strong>{this.props.todoItem.title}:</strong> {this.props.todoItem.name}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object
}

export default TodoItem;
