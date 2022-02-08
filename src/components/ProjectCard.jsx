import React from 'react';
import { GitHub, Link } from 'react-feather';
import styled from 'styled-components';
import theme from '../theme/theme';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 300px;
  background: ${(props) =>
    props.theme === "dark"
      ? theme.dark.cardBackground
      : theme.light.cardBackground};
  border-radius: 10px;
  box-shadow: 0;
  margin: 20px;
  overflow: hidden;
  user-select: none;
  transition: all 0.3s;

  img {
    height: 200px;
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 30px 60px 0 #6d6d6d1f;
  }

  div {
    margin: 10px 0;
    padding: 5px 20px;
  }

  button {
    margin-bottom: 20px;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 130%;
  font-weight: bold;
  text-align: left;
  color: ${(props) =>
    props.theme === "dark"
      ? theme.dark.textColor
      : theme.light.textColor};
  margin: 0;
`;

const ProjectDescription = styled.h4`
  font-size: 100%;
  font-weight: normal;
  text-align: left;
  padding: 7px 0;
  padding-right: 10px;
  color: ${(props) =>
    props.theme === "dark"
      ? theme.dark.linkColor
      : theme.light.linkColor};
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProjectLinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 12px;
  text-decoration: none;
  max-width: 90px;
  background: ${(p) =>
    p.secondary
      ? "#4d4d4d"
      : "#166edc"};
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #fafafa;
  transition: all 0.3s;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 5px;
  }

  :active {
    transform: translateY(5px);
  }
`;

/**
 * 
 * @param {{
 *   imgSource: string;
 *   title: string;
 *   description: string;
 *   projectLink: string;
 *   githubUrl: string;
 *   theme: "dark" | "light";
 * }} props 
 * @returns 
 */
export default function ProjectCard(props) {
  return (
    <Card theme={props.theme}>
      <img src={props.imgSource} alt="Preview Image" />

      <div>
        <ProjectTitle theme={props.theme}>{props.title}</ProjectTitle>
        <ProjectDescription theme={props.theme}>
          {props.description}
        </ProjectDescription>
      </div>

      <Actions>
        <ProjectLinkButton target="_blank" href={props.projectLink}>
          <Link /> View
        </ProjectLinkButton>
        {props.githubUrl && (
          <ProjectLinkButton target="_blank" href={props.githubUrl} secondary>
            <GitHub /> GitHub
          </ProjectLinkButton>
        )}
      </Actions>
    </Card>
  );
}
