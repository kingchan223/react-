import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트 생성 -> 재사용 가능
// 'styled-components' 의 장점: js파일과 css파일이 합처져서 관리하기 매우 편안함
const FooterList = styled.div`
  border: 1px solid blue;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는 길:xxxxx</li>
        <li>전화번호:000000</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
