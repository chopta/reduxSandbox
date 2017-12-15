import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


class Todo extends Component {
  deleteProject(id) {
    this.props.onDeleteProject(id);
  }

  render() {
    let todoItems;
    if(this.props.todos) {
      todoItems = this.props.todos.map(t => {
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

//mapping from state to prop
function mapStateToProps(state) {
  return {
    todos: state.items
  }
}

Todo.propTypes = {
  todos: PropTypes.array
}

//connecting the mapping to the component to be exported together
export default connect(mapStateToProps)(Todo);
