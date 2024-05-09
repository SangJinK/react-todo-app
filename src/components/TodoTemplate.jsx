import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import '../scss/TodoTemplate.scss';

const TodoTemplate = () => {
  return (
    <div className="TodoTemplate">
      <TodoHeader />
      <TodoMain />
      <TodoInput />
    </div>
  );
};

export default TodoTemplate;
