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
  color: ${theme.light.textColor};
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) =>
    props.theme === 'dark' ? theme.dark.textColor : theme.light.textColor};
  text-align: center;
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
