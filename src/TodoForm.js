import React, { Component } from 'react';

class TodoForm extends Component {
  static defaultProps = {
    id: '',
    action: '',
    todoContent: ''
  };
  constructor(props) {
    super(props);
    this.state = { todoContent: (this.props.action === 'add') ? '' : this.props.todoContent };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.action === 'add') {
      this.props.newTodo(this.state.todoContent);
    } else if (this.props.action === 'edit') {
      this.props.editTodo(this.props.id, this.state.todoContent);
      this.props.closeEditForm();
    }
    this.setState({todoContent: ''});
  };
  handleChange(e) {
    this.setState({todoContent: e.target.value});
  };
  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input
          name="todoContent"
          value={this.state.todoContent}
          onChange={this.handleChange}
        />
        <button>{(this.props.action === 'add') ? 'Add' : 'Save'}</button>
      </form>
    );
  }
};

export default TodoForm;