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
  text-align: center;
  width: 100%;
  height: 100px;
  background-color: aliceblue;
`

const Title = styled.span`
  font-size: 30px;
  line-height: 100px;
  background-color: aqua;
`