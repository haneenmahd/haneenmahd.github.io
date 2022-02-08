import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    min-height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0;
    margin: 20px;
    overflow: hidden;
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

/**
 * 
 * @param {{
 *   imgSource: string;
 *   title: string;
 *   description: string;
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
      </Card>
  );
}
