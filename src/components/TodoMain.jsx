import React from 'react';
import '../scss/TodoMain.scss';
import TodoItem from './TodoItem';
const TodoMain = ({ todoList, remove }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} remove={remove} />
      ))}
    </ul>
  );
};

export default TodoMain;
