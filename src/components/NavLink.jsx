import React from 'react';
import styled from "styled-components";

const NavLinkStyle = styled.a`
  position: relative;
  color: #D1D1D1;
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: .3s cubic-bezier(0.98, 0.07, 0.47, 0.74);

  &::before {
    content: " ";
    position: absolute; 
    bottom: -10px;
    height: 2px; width: 0%;
    background: linear-gradient(15deg, #1fc3ff, #9756ff);
    transition: .3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
  }

  &:hover::before {
    width: 85%;
  }

  &:hover {
    color: #eee;
  }
`;

/**
 * Alternative to react-router-dom's NavLink
 * @param {{
 *   href: string;
 *   text: string;
 * }} props 
 * @returns 
 */
export default function NavLink(props) {
  return (
    <NavLinkStyle href={props.href} target="_parent" referrerPolicy='same-origin' aria-label={`Link to ${props.href} page`}>
      {props.text}
    </NavLinkStyle>
  );
}
