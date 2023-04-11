import styled from "styled-components"
import ColorStyles from "./ColorStyles"

export const PageTitle = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;

    @media screen and (max-width: 1024px) {
        font-size: 45px;
        line-height: 56px;
    }

    @media screen and (max-width: 600px) {
        font-size: 40px;
        line-height: 51px;
    }
`

export const H1 = styled.h1`
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    color: ${ColorStyles.black};

    @media screen and (min-width: 1600px) {
        font-size: 45px;
        line-height: 65px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 30px;
        line-height: 45px;
    }

    @media screen and (max-width: 600px)  {
        font-size: 25px;
        line-height: 40px;
    }
`

export const H2 = styled.h2`
    font-weight: 400;
    font-size: 23px;
    line-height: 36px;
    color: ${ColorStyles.black};

    @media screen and (max-width: 1024px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 25px;
    }
`

export const P = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    color: ${ColorStyles.gray};

    @media screen and (max-width: 1024px) {
        font-size: 20px;
        line-height: 35px;
    }

    @media screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 30px;
    }
`