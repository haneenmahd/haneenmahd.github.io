import * as React from "react"
import styled from "styled-components"
import data from "../../../data/projectsData"
import ProjectCard from "./ProjectCard"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 100px 0;

    @media screen and (max-width: 1024px) {
        gap: 50px 0;
    }

    @media screen and (max-width: 600px) {
        gap: 20px 0;
    }
`

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <Wrapper>
            {data.map((project, index) => (
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    year={project.year}
                    floatRight={index % 2 === 0}
                />
            ))}
        </Wrapper>
    )
}

export default Projects