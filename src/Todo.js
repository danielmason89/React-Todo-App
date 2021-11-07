import React from 'react';

const Todo = (props) => {
  return (
    <div className="Todo">
      {props.todoContent}
    </div>
  );
};

export default Todo;