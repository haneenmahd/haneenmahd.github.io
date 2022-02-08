import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonLink from './CommonLink';
import theme from '../theme/theme';

const NavLinkStyle = styled(Link)`
  ${CommonLink}

  &::before {
    content: " ";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 0%;
    background: ${(props) =>
      props.theme === "dark"
        ? theme.dark.linkUnderLineColor
        : theme.light.linkUnderLineColor};
    transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before,
  :active::before {
    width: 80%;
  }

  &:hover,
  :active {
    color: ${(props) =>
      props.theme === "dark" ? theme.dark.linkUnderLineColor : theme.light.linkUnderLineColor};
  }
`;

/**
 * Alternative to react-router-dom's NavLink
 * @param {{
 *   to: string;
 *   text: string;
 * }} props 
 * @returns 
 */
export default function NavLink(props) {
  return (
    <NavLinkStyle to={props.to} aria-label={`Link to ${props.href} page`}>
      {props.text}
    </NavLinkStyle>
  );
}
