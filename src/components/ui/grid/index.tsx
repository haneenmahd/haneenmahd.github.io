import * as React from "react"
import styled from "styled-components"
import { H2, P, PageTitle } from "../../styles/TextStyles"
import Thumbnail from "../../../images/projects/thumbnail-1.png"
import ColorStyles from "../../styles/ColorStyles"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10rem;
    gap: 60px;

    @media screen and (max-width: 1024px) {
        padding: 40px;
    }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 100px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 100px;
    }
`

const GridContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1rem 0;
    transition: opacity 200ms;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const GridItemImage = styled.img`
    max-width: 100%;
    height: auto;
    border: 1px solid #E0E0E0;
    filter: drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1));
    border-radius: 15px;
`

const GridItemTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const GridItemExtra = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    color: ${ColorStyles.secondaryGray};

    @media screen and (max-width: 600px)  {
        font-size: 15px;
        line-height: 40px;
    }
`

interface GridData {
    title: string
    description: string
    year?: string
    price?: string
}

interface GridProps {
    title: string
    data: GridData[]
}

const Grid: React.FC<GridProps> = ({
    title, data
}) => {
    return (
        <Wrapper>
            <PageTitle>{title}</PageTitle>

            <GridWrapper>
                {data.map((item) => (
                    <GridItem>
                        <GridItemImage src={Thumbnail} />
                        <GridContent>
                            <GridItemTitle>
                                <H2>{item.title}</H2>
                                <GridItemExtra>✶ {item.year}</GridItemExtra>
                            </GridItemTitle>
                            <P>{item.description}</P>
                        </GridContent>
                    </GridItem>
                ))}
            </GridWrapper>
        </Wrapper>
    )
}

export default Grid