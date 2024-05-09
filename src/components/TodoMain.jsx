import React from 'react';
import '../scss/TodoMain.scss';
import TodoItem from './TodoItem';
const TodoMain = ({ todoList, remove, check }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} remove={remove} check={check} />
      ))}
    </ul>
  );
};

export default TodoMain;
