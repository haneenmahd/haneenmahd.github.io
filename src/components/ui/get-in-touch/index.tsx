import * as React from "react"
import styled, { css } from "styled-components"
import ColorStyles from "../../styles/ColorStyles"

const Wrapper = styled.caption`
    min-height: 350px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 60px;
    gap: 10px;
    text-align: left;

    @media screen and (max-width: 1024px) {
        min-height: 200px;
        padding: 20px 30px;
    }

    @media screen and (max-width: 600px) {
        min-height: 200px;
        padding: 10px 20px;
    }
`

const TextMediaQuery = css`
    @media screen and (max-width: 1024px) {
        font-size: 30px;
        line-height: 40px;
    }

    @media screen and (max-width: 600px) {
        font-size: 22px;
        line-height: 28px;
    }
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: ${ColorStyles.gray};

    ${TextMediaQuery}
`

const Link = styled.a`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: ${ColorStyles.black};
    transition-delay: 120ms;

    &:hover {
        color: ${ColorStyles.secondaryGray};
    }

    ${TextMediaQuery}
`

interface GetInTouchProps {

}

const GetInTouch: React.FC<GetInTouchProps> = props => {
    return (
        <Wrapper>
            <Title className="hidden">Let's get to know each other</Title>
            <Link className="hidden" href="mailto:haneenmahdin@gmail.com">Get in touch</Link>
        </Wrapper>
    )
}

export default GetInTouch