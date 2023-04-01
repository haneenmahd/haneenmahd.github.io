import styled from "styled-components"
import colors from "./ColorStyles"

export const PageTitle = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
`

export const H1 = styled.h1`
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: ${colors.black};

    @media screen and (max-width: 1024px) {
        font-size: 36px;
        line-height: 56px;
    }

    @media screen and (max-width: 600px)  {
        font-size: 28px;
        line-height: 40px;
    }
`

export const H2 = styled.h2`
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: ${colors.black};

    @media screen and (max-width: 1024px) {
        font-size: 36px;
        line-height: 45px;
    }

    @media screen and (max-width: 600px) {
        font-size: 28px;
        line-height: 40px;
    }
`

export const P = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: ${colors.gray};

    @media screen and (max-width: 1024px) {
        font-size: 24px;
        line-height: 40px;
    }

    @media screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 40px;
    }
`