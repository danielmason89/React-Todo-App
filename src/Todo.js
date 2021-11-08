import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './Todo.css';

class Todo extends Component {
  static defaultProps = {
    id: '',
    todoContent: '',
  };
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
  };
  handleDelete() {
    this.props.removeTodo(this.props.id);
  };
  openEditForm() {
    this.setState({
      isEditing: true,
    });
  };
  closeEditForm() {
    this.setState({
      isEditing: false,
    });
  };
  render() {
    return (
      this.state.isEditing ? (
        <TodoForm
          id={this.props.id}  
          todoContent={this.props.todoContent}
          action='edit'
          editTodo={this.props.editTodo}
          closeEditForm={this.closeEditForm}
        />
      ) : (
        <div className="Todo">
          <p>{this.props.todoContent}</p>
          <button onClick={this.openEditForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      )
    );
  }
};

export default Todo;