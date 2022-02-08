import React from 'react';
import { GitHub, Link } from 'react-feather';
import styled, { css } from 'styled-components';

const Card = styled.div`
    min-height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0;
    margin: 20px;
    overflow: hidden;
    user-select: none;
    transition: all .3s;
    cursor: pointer;

    img {
        height: 200px;
        width: 100%;
    }

    &:hover {
        box-shadow: 0 30px 60px 0 #6d6d6d1f;
    }

    div {
        margin: 20px 0;
        padding: 0 0 0 20px;
    }

    button {
        margin-bottom: 20px;
    }
`;

const ProjectTitle = styled.h4`
    font-size: 130%;
    font-weight: bold;
    text-align: left;
    margin: 0;
`;

const ProjectDescription = styled.h4`
    font-size: 100%;
    font-weight: normal;
    text-align: left;
    padding: 7px 0;
    padding-right: 10px;
    color: #d1d1d1;
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
      ? "#007b56"
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
 * }} props 
 * @returns 
 */
export default function ProjectCard(props) {
  return (
    <Card>
      <img src={props.imgSource} alt="Preview Image" />

      <div>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
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
