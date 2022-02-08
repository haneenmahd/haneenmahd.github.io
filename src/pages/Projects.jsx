import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import ProjectEmojiPlate from '../assets/img/emoji-plate.png';
import ProjectHashable from '../assets/img/hashable.png';
import ProjectImagable from '../assets/img/imagable.png';
import CommonLink from '../components/CommonLink';

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
        font-size: 120%;
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

const AllProjectsLink = styled.a`
    ${CommonLink}
    color: #166edc;
    font-weight: bold;

    &:hover {
        color: #2989ff;
    }
`;

export default function Projects() {
  return (
    <Container>
      <Intro>
        <h2>Projects 👾</h2>
        <h4>
          Here are some of my works that i have put up my time, skills, and
          effort into 💪🏻.
        </h4>
      </Intro>

      <ProjectContainer>
        <ProjectCard
          title="Imagable"
          description="A Utility to resize and optimize your icons for all platforms instanly with one click 🤯!"
          imgSource={ProjectImagable}
          projectLink="https://imagable.vercel.app"
          githubUrl="https://github.com/imagable/imagable"
        />
        <ProjectCard
          title="Emoji Plate"
          description="A collection of textual emojis and symbols"
          imgSource={ProjectEmojiPlate}
        />
        <ProjectCard
          title="Hashable"
          description="An open-source, client-side gateway for users to test out and access cryptographic functions and hashing methods. We also support a REST API which users can use to has on client-side Javascript Applications."
          imgSource={ProjectHashable}
        />
      </ProjectContainer>

      <AllProjectsLink href="#">&gt; View all projects</AllProjectsLink>
    </Container>
  );
}
