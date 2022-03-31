import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CommonLink from '../../components/CommonLink'
<<<<<<< HEAD
import theme from '../../theme'
=======
import theme from '../../theme/theme'
>>>>>>> 9a65a9ba8c4b127b32c9500c6e89d06e7e61df3a

const LogoContainer = styled.div`
  padding: 10px;
`

const CustomLink = styled(Link)`
  ${CommonLink}
<<<<<<< HEAD
  color: ${theme.light.textColor};
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
=======
  color: ${(props) =>
    props.theme === 'dark' ? theme.dark.textColor : theme.light.textColor};
  text-align: center;
>>>>>>> 9a65a9ba8c4b127b32c9500c6e89d06e7e61df3a
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
<<<<<<< HEAD
      <CustomLink to="/">HANEEN.</CustomLink>
=======
      <CustomLink theme={props.theme} to="/">
        <h3>haneen mahdin</h3>
      </CustomLink>
>>>>>>> 9a65a9ba8c4b127b32c9500c6e89d06e7e61df3a
    </LogoContainer>
  )
}
