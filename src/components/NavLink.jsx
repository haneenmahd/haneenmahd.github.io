import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CommonLink from './CommonLink'
import theme from '../theme'

const NavLinkStyle = styled(Link)`
  ${CommonLink}
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #656d78;

  &:hover {
    color: #38393a;
  }

  &:active {
    color: #38393a;
  }
`

/**
 * Alternative to react-router-dom's NavLink
 * @param {{
 *   to: string;
 *   text: string;
 * }} props
 * @returns
 */
export default function NavLink({ to, text }) {
  return (
    <NavLinkStyle to={to} aria-label={`Link to ${to} page`}>
      {text}
    </NavLinkStyle>
  )
}
