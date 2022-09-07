import React from 'react'
import styled from 'styled-components'
import CommonLink from '../components/CommonLink'
import {
  GitHub,
  Compass,
  Dribbble,
  Instagram,
  Twitter,
  Mail,
} from 'react-feather'
import theme from '../theme'

const LinksStyle = styled.aside`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Link = styled.a`
  ${CommonLink}
  font-size: 24px;
  margin: 0 10px;
  height: 30px;
  width: 30px;
  margin-right: 4%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120%;

  svg {
    stroke: ${theme.light.linkColor};
    fill: ${theme.light.iconAccent};
    transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
  }

  &:hover svg,
  :focus svg {
    stroke: ${theme.light.darkIconAccent};
    fill: ${theme.light.iconFill};
    transform: scale(1.2);
  }
`

/**
 *
 * @param {{
 *   theme: "dark" | "light";
 * }} props
 * @returns
 */
export default function Links(props) {
  return (
    <LinksStyle>
      <Link
        name="Email Me"
        target="_blank"
        href="mailto:haneenmahdin@gmail.com"
      >
        <Mail />
      </Link>

      <Link
        name="twitter"
        target="_blank"
        href="https://twitter.com/HaneenMahdin"
      >
        <Twitter />
      </Link>

      <Link
        name="instagram"
        target="_blank"
        href="https://instagram.com/haneenmahdin"
      >
        <Instagram />
      </Link>

      <Link name="github" target="_blank" href="https://github.com/haneenmahd">
        <GitHub />
      </Link>
      <Link
        name="dribbble"
        target="_blank"
        href="https://dribbble.com/haneenmahdin"
      >
        <Dribbble />
      </Link>
    </LinksStyle>
  )
}
