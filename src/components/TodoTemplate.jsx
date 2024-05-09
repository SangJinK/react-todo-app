import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import '../scss/TodoTemplate.scss';

const TodoTemplate = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '아침 산책하기',
      done: true,
    },
    {
      id: 2,
      title: '오늘 주간 신문 읽기',
      done: true,
    },
    {
      id: 3,
      title: '샌드위치 사먹기',
      done: false,
    },
    {
      id: 4,
      title: '리액트 복습하기',
      done: false,
    },
  ]);
  const addTodo = (todoText) => {
    const newTodo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title: todoText,
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="TodoTemplate">
      <TodoHeader />
      <TodoMain todoList={todos} remove={removeTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default TodoTemplate;
