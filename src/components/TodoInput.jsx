import React, { useState } from 'react';
import '../scss/TodoInput.scss';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';

const TodoInput = ({ addTodo }) => {
  const [open, setOpen] = useState(false);
  const [todoText, setTodoText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };
  const todoChangeHandler = (e) => {
    setTodoText(e.target.value);
  };
  return (
    <>
      {open && (
        <div className="form-wrapper">
          <form className="insert-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="할 일 입력 후, 엔터"
              onChange={todoChangeHandler}
              value={todoText}
            />
          </form>
        </div>
      )}
      {/*
      cn() : 첫번째 파라미터는 항상 유지할 default 클래스
                 두번째 파라미터는 논리 상태값
                 => 논리 상태값이 true일 경우 해당 클래스 추가
                    false일 경우 제거.
                    {클래스이름: 논리값}, 
                    클래스 이름 지정 안할 시 변수명이 클래스 이름으로 사용됨.
    */}
      <button
        className={cn('insert-btn', { open })}
        onClick={() => setOpen(!open)}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
