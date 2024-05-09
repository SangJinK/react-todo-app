import React from 'react';
import '../scss/TodoHeader.scss';
const TodoHeader = ({ cnt }) => {
  const date = new Date();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dateName = date.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  return (
    <header>
      <h1>{dateString}</h1>
      <div className="day">{dateName}</div>
      <div className="tasks-left">할 일 {cnt}개 남음</div>
    </header>
  );
};

export default TodoHeader;
