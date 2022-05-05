import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import CommonLink from './CommonLink'

const NavLinkStyle = styled(Link)`
  ${CommonLink}
`

/**
 * Alternative to react-router-dom's NavLink
 * @param {{
 *   to: string;
 *   text: string;
 * }} props
 * @returns
 */
export default function NavLink({ to, text, highlighted, mode = 'light' }) {
  return (
    <NavLinkStyle
      to={to}
      aria-label={`Link to ${to} page`}
      highlighted={highlighted}
      mode={mode}
    >
      {text}
    </NavLinkStyle>
  )
}
