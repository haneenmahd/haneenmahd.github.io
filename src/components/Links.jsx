import React from 'react';
import styled from "styled-components";
import CommonLink from "../components/CommonLink";
import { GitHub, Compass, Dribbble, Instagram, Twitter, Mail } from "react-feather";

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
  margin-right: 20px;

  svg {
    stroke: #d1d1d1;
    fill: #ffffff37;
    transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
  }

  &:hover svg,
  :focus svg {
    stroke: #a9a9a9;
    fill: #fff;
    transform: scale(1.2);
  }
`;

export default function Links() {
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
    </LinksStyle>
  );
}
