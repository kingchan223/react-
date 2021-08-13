import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트 생성 -> 재사용 가능
// 'styled-components' 의 장점: js파일과 css파일이 합처져서 관리하기 매우 편안함
const StyledHeaButtonDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <StyledHeaButtonDiv backgroundColor={'yellow'}>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </StyledHeaButtonDiv>
  );
};

export default Header;
