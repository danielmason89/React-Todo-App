import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {v4 as uuid} from 'uuid';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.newTodo = this.newTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  };
  newTodo(todoContent) {
    const newTodo = {
      id:uuid(), todoContent,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  editTodo(updateTodoId, updateTodoContent) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === updateTodoId) {
          return {
            ...todo,
            todoContent: updateTodoContent,
          };
        }
        return todo;
      }),
    });
  };
  removeTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  };
  render() {
    return (
      <div className="TodoList">
        <h1>ToDo List</h1>
        <p>A Simple React Todo List Application</p>
        <hr />
        {this.state.todos.map((todo) => {
          return (
            <Todo key={todo.id} id={todo.id} todoContent={todo.todoContent} editTodo={this.editTodo} removeTodo={this.removeTodo} />
          );
        })}
        <TodoForm newTodo={this.newTodo} action="add" />
      </div>
    );
  }
};

export default TodoList;