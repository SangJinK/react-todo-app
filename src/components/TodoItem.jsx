import React from 'react';
import '../scss/TodoItem.scss';
import { MdDelete, MdDone } from 'react-icons/md';
const TodoItem = ({ todo, remove }) => {
  return (
    <li className="todo-list-item">
      <div className="check-circle">
        <MdDone />
      </div>
      <span className="text">{todo.title}</span>
      <div
        className="remove"
        onClick={() => {
          remove(todo.id);
        }}
      >
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
