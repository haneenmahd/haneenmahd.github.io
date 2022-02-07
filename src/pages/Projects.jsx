import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import ProjectEmojiPlate from '../assets/img/emoji-plate.png';
import ProjectHashable from '../assets/img/hashable.png';
import ProjectImagable from '../assets/img/imagable.png';

const Container = styled.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 50px 10%;
    color: #fafafa;
`;

const Intro = styled.div`
    text-align: left;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 300%;
        font-weight: 800;
    }

    h4 {
        font-size: 100%;
        color: #c1c1c1;
        font-weight: 600;
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
`;

export default function Projects() {
  return (
      <Container>
        <Intro>
            <h2>Projects 👾</h2>
            <h4>Here are some of my works that i have put up my time, skills, and effort into 💪🏻</h4>
        </Intro>

        <ProjectContainer>
            <ProjectCard imgSource={ProjectEmojiPlate}></ProjectCard>
            <ProjectCard imgSource={ProjectHashable}></ProjectCard>
            <ProjectCard imgSource={ProjectImagable}></ProjectCard>
        </ProjectContainer>
      </Container>
  );
}
