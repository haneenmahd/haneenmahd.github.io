import * as React from "react"
import styled, { css } from "styled-components"
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
    width: 100%;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

const GridItemPrice = styled.div<{
    free?: boolean
}>`
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    padding: 0 5px;
    border-radius: 10px;
    
    ${p => p.free ? css`
        color: ${ColorStyles.blue};
        background-color: ${ColorStyles.blue}30;
    ` : css`
        color: ${ColorStyles.magenta};
        background-color: ${ColorStyles.magenta}30;
    `}

    @media screen and (max-width: 600px)  {
        font-size: 15px;
        line-height: 25px;
    }
`

const GridItemYear = styled.div`
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
    year?: number
    price?: number
}

interface GridProps {
    title: string
    data: GridData[]
}

const Grid: React.FC<GridProps> = ({
    title, data
}) => {
    let sortedData = data.sort((a, b) => {
        if (a.year && b.year) {
            return b.year - a.year
        }

        return 0
    })

    return (
        <Wrapper>
            <PageTitle>{title}</PageTitle>

            <GridWrapper>
                {sortedData.map((item) => (
                    <GridItem>
                        <GridItemImage src={Thumbnail} />
                        <GridContent>
                            <GridItemTitle>
                                <H2>{item.title}</H2>
                                <GridItemExtra>
                                    {item.price ?
                                        <GridItemPrice>${item.price}</GridItemPrice> :
                                        item.price === 0 ?
                                            <GridItemPrice free>Free</GridItemPrice> :
                                            null}

                                    <GridItemYear>✶ {item.year}</GridItemYear>
                                </GridItemExtra>
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