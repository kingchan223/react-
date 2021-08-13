import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

//데이터 다운은 되도록이면 페이지에서 받자.
const HomePage = () => {
  //http 요청 (fetch or axios 사용)
  const [boards, setBoards] = useState([]); // 얘는 꼭 상태값이어야 한다. 비동기 처리때문에 빈 데이터가 들어갈 수 있음
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    //데이터를 다운 받았다고 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
    ];
    setBoards([...data]);
    setUser({ id: 1, username: 'king' });
  }, []); //빈배열이면 무조건 한번만 실행된다. 의존성이 없으니까.

  return (
    <Home
      boards={boards}
      setBoards={setBoards}
      number={number}
      setNumber={setNumber}
      user={user}
    />
  );
};

export default HomePage;
