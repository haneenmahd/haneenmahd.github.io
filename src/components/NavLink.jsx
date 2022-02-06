import React from 'react';
import styled from "styled-components";

const NavLinkStyle = styled.a`
  position: relative;
  color: #D1D1D1;
  text-decoration: none;
  margin: 0 8px;
  padding: 2px;

  &::before {
    content: " ";
    position: absolute; 
    bottom: -5px;
    height: 2px; width: 0%;
    background-color: #fff;
    transition: .3s ease-in;
  }

  &:hover::before {
    width: 100%;
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
