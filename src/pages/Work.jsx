import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import { Heading } from '../components/Text'

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
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

const ProjectCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  border: 1px solid #c4c4c4;
  transition: 100ms ease;

  &:hover {
    background: #c4c4c430;
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
    <Container>
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
          🏗 Shipped a Javascript project management system
        </Contribution>
        <Contribution>
          🤓 Updated some docs & fixed an issue in the Vercel repository
        </Contribution>
      </SubContainer>

      <SubContainer>
        <Heading>🤟 Open source projects</Heading>
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
      </SubContainer>
    </Container>
  )
}
