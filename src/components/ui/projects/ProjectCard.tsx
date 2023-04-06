import * as React from "react"
import styled, { css } from "styled-components"
import { H2, P } from "../../styles/TextStyles"
import ColorStyles from "../../styles/ColorStyles"
import Thumbnail from "../../../images/projects/thumbnail.jpg"

const Wrapper = styled.div<{
    floatRight: boolean
}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 1rem;
    gap: 10px;
    cursor: pointer;
    border: 1px solid transparent;

    ${p => p.floatRight ? css`
        align-items: flex-end;
    ` : null}

    @media screen and (max-width: 1024px) {
        ${p => p.floatRight ? css`
            align-items: flex-start;
        ` : null}
    }
`

const Info = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 25px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: opacity 200ms;

    &:hover {
        opacity: 0.6;
    }
`

const Image = styled.img`
    height: auto;
    width: 100%;
    border: 1px solid ${ColorStyles.tertiaryGray};
    filter: drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1));
    border-radius: 15px;
    border: 1px solid ${ColorStyles.tertiaryGray};

    @media screen and (max-width: 1024px) {
        max-width: 100%;
    }

    @media screen and (max-width: 600px) {
        height: 250px;
    }
`

interface ProjectCard {
    title: string
    description: string
    image: string
    year: number
    floatRight: boolean
}

const ProjectCard: React.FC<ProjectCard> = ({
    title,
    description,
    image,
    year,
    floatRight
}) => {
    return (
        <Wrapper floatRight={floatRight}>
            <Info>
                <TextInfo>
                    <H2>{title}</H2>
                    <P>{description}</P>
                </TextInfo>
                <Image src={Thumbnail} alt={description} />
            </Info>
        </Wrapper>
    )
}

export default ProjectCard