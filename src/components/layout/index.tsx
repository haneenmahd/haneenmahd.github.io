import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavBar from "../ui/navbar"

const Wrapper = styled.div`
    padding: 0 3.5rem;
    padding-top: 29px;
    max-width: 100vw;

    @media screen and (max-width: 1024px) {
        padding: 0;
        padding-top: 29px;
    }

    @media screen and (max-width: 600px)  {
        margin: 0;
        padding-top: 29px;
    }
`

interface LayoutProps {
    children: ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Wrapper>
            <NavBar />

            {children}
        </Wrapper>
    )
}

export default Layout