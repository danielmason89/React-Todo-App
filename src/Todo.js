import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  static defaultProps = {
    id: '',
    todoContent: '',
  };
  constructor(props) {
    super(props);
    this.state = {  };
    this.handleDelete = this.handleDelete.bind(this);
  };
  handleDelete() {
    this.props.removeTodo(this.props.id);
  };
  render() {
    return (
      <div className="Todo">
        <p>{this.props.todoContent}</p>
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
};

export default Todo;