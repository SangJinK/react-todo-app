import React from 'react';
import '../scss/TodoMain.scss';
import TodoItem from './TodoItem';
const TodoMain = ({ todoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoMain;
