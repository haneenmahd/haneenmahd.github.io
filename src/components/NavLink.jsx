import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import CommonLink from './CommonLink'
import theme from '../theme'

const NavLinkStyle = styled(Link)`
  ${CommonLink}
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #656d78;
  padding: 0;

  &:hover {
    color: #38393a;
  }

  ${(p) =>
    p.highlighted &&
    css`
      padding: 8px 15px;
      border-radius: 5px;
      background-color: #122;
      color: #fafafa;

      &:hover {
        color: #ebebeb;
      }
    `}
`

/**
 * Alternative to react-router-dom's NavLink
 * @param {{
 *   to: string;
 *   text: string;
 * }} props
 * @returns
 */
export default function NavLink({ to, text, highlighted }) {
  return (
    <NavLinkStyle
      to={to}
      aria-label={`Link to ${to} page`}
      highlighted={highlighted}
    >
      {text}
    </NavLinkStyle>
  )
}
