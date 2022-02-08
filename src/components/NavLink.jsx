import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonLink from './CommonLink';

const NavLinkStyle = styled(Link)`
  ${CommonLink}

  &::before {
    content: " ";
    position: absolute; 
    bottom: -5px;
    height: 2px; width: 0%;
    background: #eee;
    transition: .3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before {
    width: 80%;
  }

  &:hover {
    color: #eee;
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
