import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <FooterBox>이것은 푸터</FooterBox>;
};

export default Footer;

const FooterBox = styled.div`
  position: fixed;
  bottom: 0px;
  width: 500px;
  height: 30px;
  background-color: aliceblue;
  box-shadow: 0 -1px 3px 0 gray;
`;
