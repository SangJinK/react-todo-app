import React from 'react';
import '../scss/TodoItem.scss';
import { MdDelete, MdDone } from 'react-icons/md';
import cn from 'classnames';
const TodoItem = ({ todo, remove, check }) => {
  return (
    <li className="todo-list-item">
      <div
        className={cn('check-circle', { active: todo.done })}
        onClick={() => check(todo.id)}
      >
        <MdDone />
      </div>
      <span className={cn('text', { finish: todo.done })}>{todo.title}</span>
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
