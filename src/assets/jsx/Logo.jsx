import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CommonLink from '../../components/CommonLink'
import theme from '../../theme'

const LogoContainer = styled.div`
  padding: 10px;
`

const CustomLink = styled(Link)`
  ${CommonLink}
  color: ${theme.light.textColor};
  font-size: 20px;
  font-weight: 900;
`

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
      <CustomLink to="/">HANEEN.</CustomLink>
    </LogoContainer>
  )
}
