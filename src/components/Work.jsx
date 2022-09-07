import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { Heading } from './Text'

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem 0;
`

const Contribution = styled.div`
  margin: 0.2rem 0;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  line-height: 1.4rem;
  transition: 100ms ease;
  color: #666;
  cursor: pointer;

  &:hover {
    background-color: #c4c4c450;
  }

  &:active {
    scale: 0.99;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  transition: 100ms ease;

  &:hover {
    background: #e5e5e52f;
  }
`

const ProjectTitle = styled(Heading)`
  font-size: 16px;
  color: #333;
`

const ProjectDescription = styled.p`
  font-size: 15px;
  color: #555;
`

export default function Work() {
  return (
    <Container id="work">
      <SubContainer>
        <Heading>💗 Contribution activity</Heading>
        <Contribution>
          🛳 Released the first version of Dapper, a blazing fast & powerful
          state management library
        </Contribution>
        <Contribution>
          😜 Helped in the migration of Material UI components to support theme
          CSS variables
        </Contribution>

        <Contribution>
          🏗 Shipped a Javascript project management system - Unakki
        </Contribution>
        <Contribution>
          🤓 Updated some docs & fixed an issue in the Vercel repository
        </Contribution>
      </SubContainer>

      <SubContainer>
        <Heading>🤟 Open source projects</Heading>
        <ProjectGrid>
          <ProjectCard>
            <ProjectTitle>🪩 Dapper</ProjectTitle>
            <ProjectDescription>
              Blazing fast & powerful state management library
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>🤺 Unakki</ProjectTitle>
            <ProjectDescription>
              Simple and lightweight project management CLI tool
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>🤏 MetaD</ProjectTitle>
            <ProjectDescription>
              CLI tool to get the information about a npm package
            </ProjectDescription>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>🎃 TypeInstall</ProjectTitle>
            <ProjectDescription>
              Helper tool to Automatically installs types for your typescript project
            </ProjectDescription>
          </ProjectCard>
        </ProjectGrid>
      </SubContainer>
    </Container>
  )
}
