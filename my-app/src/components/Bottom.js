import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../Store';

const Bottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase('카리나'))}>증가</button>
      <button onClick={() => dispatcher(decrease('윈터'))}>감소</button>
    </div>
  );
};

export default Bottom;
