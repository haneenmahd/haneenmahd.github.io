import React from 'react';
import styled from "styled-components";

const LogoContainer = styled.div`
  color: #fff;
  text-align: center;
  padding: 10px;

  h3 {
    position: relative;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <h3>haneen mahdin</h3>
    </LogoContainer>
  );
}
