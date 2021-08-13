import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'king' ? 'blue' : 'red')};
`;

//스타일 확장
const StyledAddButton = styled.button`
  color: ${(props) => (props.user.username === 'king' ? 'blue' : 'red')};
  background-color: green;
`;

//Function 방식
const Home = (props) => {
  //구조 분할 할당
  const { boards, setBoards, number, setNumber, user } = props; //props의 boards라는 키로 넘어온 데이터가 담긴다.

  return (
    <div>
      <h1>홈페이지 :{number}</h1>
      <Button variant="primary">Primary</Button>
      <button onClick={() => setNumber(number + 1)}>증가 버튼</button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목:{board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
