import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonLink from "../../components/CommonLink";
import theme from '../../theme/theme';

const LogoContainer = styled.div`
  padding: 10px;
`;

const CustomLink = styled(Link)`
  ${CommonLink}
  color: ${props => props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};
  text-align: center;
`;

/**
 * 
 * @param {{
 *   theme: "dark" | "light";
 * }} props 
 * @returns 
 */
export default function Logo(props) {
  return (
    <LogoContainer>
      <CustomLink theme={props.theme} to="/">
        <h3>haneen mahdin</h3>
      </CustomLink>
    </LogoContainer>
  );
}
