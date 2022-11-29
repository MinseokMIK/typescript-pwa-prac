import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBox>
      <Title>심리테스트</Title>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  position: fixed;
  text-align: center;
  width: 500px;
  height: 60px;
  background-color: aliceblue;
  box-shadow: 0 1px 3px 0 gray;
`;

const Title = styled.span`
  font-size: 30px;
  line-height: 60px;
`;
