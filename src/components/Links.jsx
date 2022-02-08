import React from 'react';
import styled from "styled-components";
import CommonLink from "../components/CommonLink";
import { GitHub, Compass, Dribbble, Instagram, Twitter, Mail } from "react-feather";
import theme from '../theme/theme';

const LinksStyle = styled.aside`
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
`;

const Link = styled.a`
  ${CommonLink}
  text-align: left;
  font-size: 24px;
  margin: 0;
  margin-right: 2.7%;

  svg {
    stroke: ${props => props.theme === "dark" ? theme.dark.linkColor : theme.light.linkColor};
    fill: ${props => props.theme === "dark" ? theme.dark.iconAccent : theme.light.iconAccent};
    transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
  }

  &:hover svg,
  :focus svg {
    stroke: ${props => props.theme === "dark" ? theme.dark.darkIconAccent : theme.light.darkIconAccent};
    fill: ${props => props.theme === "dark" ? theme.dark.iconFill : theme.light.iconFill};
    transform: scale(1.2);
  }
`;

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
        theme={props.theme}
        target="_blank"
        href="https://github.com/haneenmahd"
      >
        <GitHub />
      </Link>
      <Link
        theme={props.theme}
        target="_blank"
        href="https://dribbble.com/haneenmahdin"
      >
        <Dribbble />
      </Link>
      <Link
        theme={props.theme}
        target="_blank"
        href="https://instagram.com/haneenmahdin"
      >
        <Instagram />
      </Link>
      <Link
        theme={props.theme}
        target="_blank"
        href="https://twitter.com/HaneenMahdin"
      >
        <Twitter />
      </Link>
      <Link theme={props.theme} href="/projects">
        <Compass />
      </Link>
      <Link
        theme={props.theme}
        target="_blank"
        href="mailto:haneenmahdin@gmail.com"
      >
        <Mail />
      </Link>
    </LinksStyle>
  );
}
