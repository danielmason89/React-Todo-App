import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todoContent: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.newTodo(this.state.todoContent);
    this.setState({todoContent: ''});
  }
  handleChange(e) {
    this.setState({todoContent: e.target.value});
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input
          name="todoContent"
          value={this.state.todoContent}
          onChange={this.handleChange}
          placeholder="Add new todo"
        />
        <button>Add</button>
      </form>
    );
  }
};

export default NewTodoForm;