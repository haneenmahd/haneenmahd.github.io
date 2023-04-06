import * as React from "react"
import styled from "styled-components"
import FooterBlob from "../../blob/FooterBlob"
import { Link } from "gatsby"
import ColorStyles from "../../styles/ColorStyles"
import data from "../../../data/linksData.json"

const Wrapper = styled.footer`
    position: relative;
    min-height: 280px;
    max-width: 100%;
    padding: 40px;
    background: ${ColorStyles.tertiaryGray}50;
    border-top: 1px solid ${ColorStyles.tertiaryGray};
    overflow: hidden;
`

const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
        align-items: flex-start;
        flex-direction: column;
    }
`

const QuoteText = styled.h1`
    font-weight: 500;
    font-size: 30px;
    line-height: 60px;

    &::before {
        content: "“";
    }

    &::after {
        content: "”";
    }

    @media screen and (max-width: 1024px) {
        max-width: 70%;
    }
    
    @media screen and (max-width: 600px) {
        max-width: 100%;
    }
`

const LinksGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-template-rows: 1fr 1fr 1fr;
        grid-row-gap: 30px;
    }
`

const LinksCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1rem;
    gap: 15px;

    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`

const LinksColTitle = styled.h4`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${ColorStyles.secondaryBlack};
`

const FooterLink = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: ${ColorStyles.secondaryGray};
    transition: color 200ms;

    &:hover {
        color: ${ColorStyles.gray};
    }
`

interface FooterProps { }

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <Wrapper>
            <FooterBlob />

            <ContentWrapper>
                <QuoteText>
                    I've never designed something so stupidly useful in my life
                </QuoteText>

                <LinksGrid>
                    {data.map((col, key) => (
                        <LinksCol key={key}>
                            <LinksColTitle>{col.name}</LinksColTitle>

                            {col.links.map((link, key) => {
                                let linkArgs = {
                                    target: col.external ? "_blank" : "_self"
                                }

                                let formRoute = (route: string) => {
                                    if (col.external) {
                                        return route
                                    }

                                    return col.route + route
                                }

                                return (
                                    <>
                                        <FooterLink
                                            to={formRoute(link.route)}
                                            {...linkArgs}>
                                            {link.name}
                                        </FooterLink>
                                    </>
                                )
                            })}
                        </LinksCol>
                    )
                    )}
                </LinksGrid>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Footer