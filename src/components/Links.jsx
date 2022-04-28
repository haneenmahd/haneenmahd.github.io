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
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
`

const Link = styled.a`
  ${CommonLink}
  font-size: 24px;
  margin: 0;
  margin-right: 4%;

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
      <Link target="_blank" href="https://github.com/haneenmahd">
        <GitHub />
      </Link>
      <Link target="_blank" href="https://dribbble.com/haneenmahdin">
        <Dribbble />
      </Link>
      <Link target="_blank" href="https://instagram.com/haneenmahdin">
        <Instagram />
      </Link>
      <Link target="_blank" href="https://twitter.com/HaneenMahdin">
        <Twitter />
      </Link>
      <Link href="/projects">
        <Compass />
      </Link>
      <Link target="_blank" href="mailto:haneenmahdin@gmail.com">
        <Mail />
      </Link>
    </LinksStyle>
  )
}
