import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  };

  render() {
    return (
      <div className="TodoList">
        <h1>ToDo List</h1>
        <p>A Simple React Todo List Application</p>
        <hr />
        ===TODOs here===
      </div>
    );
  }
};

export default TodoList;