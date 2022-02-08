import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonLink from "../../components/CommonLink";

const LogoContainer = styled.div`
  padding: 10px;
`;

const CustomLink = styled(Link)`
  ${CommonLink}
  color: #fafafa;
  text-align: center;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <CustomLink to="/">
        <h3>haneen mahdin</h3>
      </CustomLink>
    </LogoContainer>
  );
}
